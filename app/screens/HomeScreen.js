import {
  Alert,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Welcome from "../components/others/Welcome";
import SectionHeader from "../components/others/SectionHeader";
import SPACING from "../config/constants";
import CharactersGridList from "../components/Character/CharactersGridList";
import colors from "../config/colors";
import { getCharacters } from "../api/characters/characters";
import ScreenLoading from "../components/others/ScreenLoading";
import Animated from "react-native-reanimated";
import moment from "moment";

const HomeScreen = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searching, setSearching] = useState(false);
  const [lastLoad, setLastLoad] = useState(Date.now());
  const [queryParams, setQueryParams] = useState("");
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    loadCharacters();
  }, []);

  const loadCharacters = async (params = queryParams) => {
    const result = await getCharacters(params);
    if (!result.ok) {
      setLoading(false);
    }
    setLoading(false);
    setSearching(false);
    setCharacters(result.data.results);
    setPage(1);
    setPages(result.data.info.pages);
  };

  const loadMoreCharacters = async (params = queryParams) => {
    const result = await getCharacters(params);
    if (!result.ok) {
      setLoadingMore(false);
    }
    setCharacters((currentCharacters) => {
      let currData = [...currentCharacters, ...result.data.results];
      return currData;
    });
    setLoadingMore(false);
    setPage(page + 1);
  };

  const handleSearch = (value) => {
    if (value) {
      setSearching(true);
      loadCharacters("?name=" + value);
      setQueryParams("?name=" + value);
    } else {
      loadCharacters();
      setQueryParams("");
    }
  };

  const onScroll = (event) => {
    const layoutHeight = event.nativeEvent.layoutMeasurement.height;
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollY = event.nativeEvent.contentOffset.y;
    const diff = moment(Date.now()).diff(moment(lastLoad), "seconds");
    if (scrollY + layoutHeight >= contentHeight && diff >= 5 && page < pages) {
      setLoadingMore(true);
      loadMoreCharacters(
        queryParams
          ? queryParams + "&page=" + (page + 1)
          : queryParams + "?page=" + (page + 1)
      );
      setLastLoad(Date.now());
    }
  };

  return (
    <>
      {loading ? (
        <ScreenLoading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              onRefresh={() => {
                setLoading(true);
                loadCharacters();
              }}
              refreshing={loading}
            />
          }
          scrollEventThrottle={16}
          onScroll={onScroll}
          style={styles.container}
        >
          <Welcome onSearch={handleSearch} />
          <View style={styles.mainWrapper}>
            <SectionHeader title="Characters" />
            <CharactersGridList
              loading={searching}
              loadingMore={loadingMore}
              characters={characters}
            />
          </View>
        </ScrollView>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
  },
  mainWrapper: {
    padding: SPACING,
  },
});
