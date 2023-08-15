import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
  } from "react-native";
import React,{useState} from 'react'
import spacing from "../config/spacing";
import { BlurView } from "expo-blur";
import {Ionicons} from '@expo/vector-icons'
import colors from "../config/colors";
import songs from '../config/songs'
// import spacing from "../config/spacing";


const avatar = require('../assets/icon.png')

const {width} = Dimensions.get('window')
const MusicScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: spacing,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: spacing,
              overflow: "hidden",
              width: spacing * 4,
              height: spacing * 4,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="menu"
                size={spacing * 2.5}
                color={colors.secondary}
              />
            </BlurView>
          </TouchableOpacity>
          <View
            style={{
              width: spacing * 4,
              height: spacing * 4,
              overflow: "hidden",
              borderRadius: spacing,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                padding: spacing / 2,
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: spacing,
                }}
                source={avatar}
              />
            </BlurView>
          </View>
        </View>
        <View style={{ width: "80%", marginVertical: spacing * 3 }}>
          <Text
            style={{
              color: colors.white,
              fontSize: spacing * 3.5,
              fontWeight: "600",
            }}
          >
            Find the best songs for you
          </Text>
        </View>
        {/* <SearchField />
        <Categories onChange={(id) => setActiveCategoryId(id)} /> */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {songs
            .map((song) => (
              <View
                key={song.id}
                style={{
                  width: width / 2 - spacing * 2,
                  marginBottom: spacing,
                  borderRadius: spacing * 2,
                  overflow: "hidden",
                }}
              >
                <BlurView
                  tint="dark"
                  intensity={95}
                  style={{
                    padding: spacing,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: 150,
                      width: "100%",
                    }}
                  >
                    <Image
                      source={song.artwork}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: spacing * 2,
                      }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        borderBottomStartRadius: spacing * 3,
                        borderTopEndRadius: spacing * 2,
                        overflow: "hidden",
                      }}
                    >
                      <BlurView
                        tint="dark"
                        intensity={70}
                        style={{
                          flexDirection: "row",
                          padding: spacing - 2,
                        }}
                      >
                        <Ionicons
                          style={{
                            marginLeft: spacing / 2,
                          }}
                          name="star"
                          color={colors.primary}
                          size={spacing * 1.7}
                        />
                        <Text
                          style={{
                            color: colors.white,
                            marginLeft: spacing / 2,
                          }}
                        >
                          {song.artist}
                        </Text>
                      </BlurView>
                    </View>
                  </TouchableOpacity>
                  <Text
                    numberOfLines={2}
                    style={{
                      color: colors.white,
                      fontWeight: "600",
                      fontSize: spacing * 1.7,
                      marginTop: spacing,
                      marginBottom: spacing / 2,
                    }}
                  >
                    {song.title}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{ color: colors.secondary, fontSize: spacing * 1.2 }}
                  >
                    {song.id}
                  </Text>
                  <View
                    style={{
                      marginVertical: spacing / 2,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          color: colors.primary,
                          marginRight: spacing / 2,
                          fontSize: spacing * 1.6,
                        }}
                      >
                        $
                      </Text>
                      <Text
                        style={{ color: colors.white, fontSize: spacing * 1.6 }}
                      >
                        {/* {coffee.price} */}
                      </Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: colors.primary,
                        padding: spacing / 2,
                        borderRadius: spacing,
                      }}
                    >
                      <Ionicons
                        name="add"
                        size={spacing * 2}
                        color={colors.white}
                      />
                    </TouchableOpacity>
                  </View>
                </BlurView>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default MusicScreen

const styles = StyleSheet.create({})