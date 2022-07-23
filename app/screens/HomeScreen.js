import { Alert, StyleSheet, View } from "react-native";
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
  const [lastLoadMore, setLastLoadMore] = useState(Date.now());
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    setLoading(true);
    loadCharacters();
  }, []);

  const loadCharacters = async (params = "") => {
    const result = await getCharacters(params);
    if (!result.ok) {
      setLoading(false);
    }
    setCharacters(result.data.results);
    setNextPage(result.data.info.next);
    setLoading(false);
    setSearching(false);
  };

  const loadMoreCharacters = async (page) => {
    const result = await getCharacters(page);
    if (!result.ok) {
      setLoadingMore(false);
    }
    setCharacters((currentCharacters) => {
      let currData = [...currentCharacters, ...result.data.results];
      return currData;
    });
    setNextPage(result.data.info.next);
    setLoadingMore(false);
  };

  const handleSearch = (value) => {
    if (value) {
      setSearching(true);
      // loadCharacters("?name=" + value);
    } else {
      loadCharacters();
    }
  };

  const onScroll = (event) => {
    const layoutHeight = event.nativeEvent.layoutMeasurement.height;
    const contentHeight = event.nativeEvent.contentSize.height;
    const scrollY = event.nativeEvent.contentOffset.y;
    const diff = moment(Date.now()).diff(moment(lastLoadMore), "seconds");
    if (scrollY + layoutHeight >= contentHeight && diff >= 5) {
      loadMoreCharacters(nextPage);
      setLastLoadMore(Date.now());
    }
  };

  return (
    <>
      {loading ? (
        <ScreenLoading />
      ) : (
        <Animated.ScrollView
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
        </Animated.ScrollView>
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
