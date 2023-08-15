import {View, Text, Image, TouchableOpacity, ScrollView,StyleSheet} from 'react-native';
import React from 'react'
import {colors} from '../config/colors';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.logo}
        source={require('../assets/Images/breath.jpeg')}
      /> */}
      <View style={styles.header}>
        <Text style={styles.heading}>Good Morning, Afsar</Text>
        <Text style={styles.subHeading}>We Wish you have a good day</Text>
      </View>
      <View style={styles.sectionWrapper1}>
        <View style={styles.item1}>
          <Image
            style={styles.basicImg}
            source={require('../assets/Images/mainbg.jpeg')}
          />
          <View style={styles.cardContent}>
            <Text style={[styles.cardTitle, {color: '#FFECCC'}]}>
              Basic
            </Text>
            <Text style={[styles.cardSubTitle, {color: '#FFECCC'}]}>
              COURSE
            </Text>
          </View>
          <View style={styles.cardFooterWrapper}>
            <View>
              <Text style={[styles.footerTitle, {color: '#FFECCC'}]}>
                3-10 MIN
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={[
                  styles.cardBtn,
                  {backgroundColor: '#EBEAEC'},
                ]}>
                <Text style={styles.btnLabel}>START</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.item2}>
          <Image source={require('../assets/Images/mindfulness.jpeg')} />
          <View style={styles.cardContent}>
            <Text style={[styles.cardTitle, {color: '#3F414E'}]}>
              Relaxation
            </Text>
            <Text style={[styles.cardSubTitle, {color: '#3F414E'}]}>
              MUSIC
            </Text>
          </View>
          <View style={styles.cardFooterWrapper}>
            <View>
              <Text style={[styles.footerTitle, {color: '#3F414E'}]}>
                3-10 MIN
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.cardBtn, {backgroundColor: '#3F414E'}]}>
                <Text style={[styles.btnLabel, {color: '#EBEAEC'}]}>
                  START
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.dailyThoughtsWrapper}>
        <Image
          style={styles.bgShape1}
          source={require('../assets/Images/welcome.png')}
        />
        <Image
          style={styles.bgShape2}
          source={require('../assets/Images/welcome.png')}
        />
        <Image
          style={styles.bgShape3}
          source={require('../assets/Images/welcome.png')}
        />
        <View>
          <Text style={styles.dailyTitle}>Daily Thought</Text>
          <Text style={styles.dailySubTitle}>MEDITATION - 3-10 MIN</Text>
        </View>
        <View>
          <Image source={require('../assets/Images/welcome.png')} />
        </View>
      </View>
      <View style={styles.recommendWrapper}>
        <Text style={styles.recommendTitle}>Recomended for you</Text>
        <ScrollView horizontal={true}>
          <View style={[styles.recommedCard]}>
            <View
              style={[
                styles.recommednImgWrapper,
                {backgroundColor: '#afdbc5'},
              ]}>
              <Image
                source={require('../assets/Images/welcome.png')}
              />
            </View>
            <View style={styles.recommendCardContentWrapper}>
              <Text style={styles.recommentContentTitle}>Focus</Text>
              <Text style={styles.recommentContentSubTitle}>
                MEDITATION - 3-10 MIN
              </Text>
            </View>
          </View>
          <View style={[styles.recommedCard]}>
            <View
              style={[
                styles.recommednImgWrapper,
                {backgroundColor: '#fcdea5'},
              ]}>
              <Image
                source={require('../assets/Images/welcome.png')}
              />
            </View>
            <View style={styles.recommendCardContentWrapper}>
              <Text style={styles.recommentContentTitle}>Happiness</Text>
              <Text style={styles.recommentContentSubTitle}>
                MEDITATION - 3-10 MIN
              </Text>
            </View>
          </View>
          <View style={[styles.recommedCard]}>
            <View
              style={[
                styles.recommednImgWrapper,
                {backgroundColor: '#afdbc5'},
              ]}>
              <Image
                source={require('../assets/Images/welcome.png')}
              />
            </View>
            <View style={styles.recommendCardContentWrapper}>
              <Text style={styles.recommentContentTitle}>Focus</Text>
              <Text style={styles.recommentContentSubTitle}>
                MEDITATION - 3-10 MIN
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        padding: 20,
      },
      logo: {
        alignSelf: 'center',
        marginTop: 30,
      },
      header: {},
      heading: {
        fontFamily: 'HelveticaNeue',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 40,
      },
      subHeading: {
        fontFamily: 'HelveticaNeue',
        fontSize: 20,
        fontWeight: '300',
        marginTop: 10,
      },
      sectionWrapper1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
      },
      item1: {
        backgroundColor: '#8E97FD',
        flex: 1,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'space-between',
      },
      item2: {
        backgroundColor: '#FFC97E',
        flex: 1,
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
      },
      basicImg: {
        alignSelf: 'flex-end',
      },
      cardContent: {
        position: 'absolute',
        top: '35%',
        padding: 15,
      },
      cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'HelveticaNeue',
      },
      cardSubTitle: {
        marginTop: 10,
        fontSize: 11,
      },
      cardFooterWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        marginTop: '0%',
        alignItems: 'center',
      },
      footerTitle: {
        fontSize: 11,
        fontFamily: 'HelveticaNeue',
      },
      cardBtn: {
        borderRadius: 50,
      },
      btnLabel: {
        fontFamily: 'HelveticaNeue',
        fontSize: 12,
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 15,
        marginRight: 15,
        color: '#3F414E'
      },
      dailyThoughtsWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#333242',
        alignItems: 'center',
        height: 95,
        borderRadius: 10,
        marginTop: 10,
      },
      bgShape1: {
        position: 'absolute',
        left: 0,
        top: 0,
      },
      bgShape2: {
        position: 'absolute',
        right: 0,
        top: 0,
      },
      bgShape3: {
        position: 'absolute',
        right: '40%',
        bottom: 0,
      },
      dailyTitle: {
        fontSize: 18,
        fontFamily: 'HelveticaNeue',
        color: '#ffff',
        fontWeight: 'bold',
        marginBottom: 10,
      },
      dailySubTitle: {
        color: '#ffff',
        fontSize: 11,
        fontFamily: 'HelveticaNeue',
      },
      recommendWrapper: {
        marginTop: 40,
      },
      recommendTitle: {
        fontSize: 24,
        fontFamily: 'HelveticaNeue',
        color: '#3F414E',
        fontWeight: 'bold',
        marginBottom: 20,
      },
      recommedCard: {
        borderRadius: 10,
        width: 160,
        marginRight: 20,
      },
      recommednImgWrapper: {},
      recommentContentTitle: {
        fontSize: 18,
        fontFamily: 'HelveticaNeue',
        fontWeight: 'bold',
        color: '#3F414E',
        paddingTop: 10,
        paddingBottom: 5,
      },
      recommentContentSubTitle: {
        fontSize: 11,
        fontFamily: 'HelveticaNeue',
    
        color: '#A1A4B2',
      },
})