![image](https://s2.loli.net/2023/06/05/kxNSAK3I5weuWTF.jpg)

* * *
![](https://img.shields.io/badge/Dhyana-1.0.0-orange)
![](https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=F7DF1E) ![](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) ![](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)
![](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/React_Native-20232A?style=flat&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/Firebase-20232A?style=flat&logo=firebase&logoColor=FFBF00) ![](https://img.shields.io/badge/Canva-%2300C4CC.svg?&style=flat&logo=Canva&logoColor=white)
![](https://img.shields.io/badge/Figma-F24E1E?style=flat&logo=figma&logoColor=white) ![](https://img.shields.io/badge/Xcode-007ACC?style=flat&logo=Xcode&logoColor=white) ![](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=flat&logo=visual%20studio%20code&logoColor=white)

Dhyana is a reinforcement meditation mobile application based on React Native.Dhyana will establish a robust user base that incorporates the app into their daily routines as a reliable tool for managing stress and anxiety, thereby underlining its critical role in their lives. Moreover, we anticipate receiving positive user feedback and achieving high satisfaction rates, which will serve as evidence of the app's effectiveness and user-friendliness.

The supported interface docs currently include:
[React Native 0.71](http://blog.sina.com.cn/endlch "Title")

* [React Native](https://example.com): Version 0.71 
* [React](https://react.dev/reference/react): Version 18.2.0 
* [Firebase](https://firebase.google.com/docs): Version 9.19.1
* [TypeScript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html): Version 4.9.4
* [Expo](https://docs.expo.dev/?utm_source=google&utm_medium=cpc&utm_content=search&gclid=Cj0KCQjw7PCjBhDwARIsANo7Cgl826z70s94gL5Ejj-bGVDKTnDCCJJ4qvtJ1vZMWYE_a02bYxo5ioAaAiDREALw_wcB): Version 48.0.6
* [JavaScript](https://devdocs.io/javascript/): Version ECMAScript 2022

Here are Dhyana's other features:
* Elegant framework, using only 47 files of the project
* Support ios environment for all physical device Usage
* Support android environment for all physical device Usage
* Support any type of environment state/action Usage

Our app aims to make stress management accessible to everyone, helping people achieve a healthy work-life balance. We integrated aspects of Chinese culture into the app in a creative way to promote inner tranquillity by combining Confucian theory with Tai Chi exercises. The app aims to guide users in harmonizing their body's energy network—the Yin and Yang—which is fundamental to Chinese philosophy. By promoting this equilibrium, the app helps facilitate the attainment of inner peace and overall wellbeing for users, offering a unique and culturally rich stress reduction.


## Getting Started
### 1) Clone & Install Dependencies
* 1.1) git clone     ``https://github.com/dawnaliens/InnerPeace.git``
* 1.2) cd ``Dhyana`` - cd into your newly created project directory.
* 1.3) Install NPM packages with your package manager of choice - i.e run ``yarn`` or ``npm install``
* 1.4) [iOS] ``cd ios`` and ``run pod install`` - if you don't have CocoaPods you can follow these instructions to install it.
* 1.5) [Android] No additional steps for android here.

### 2) Rename Project
You will need to be running Node verison 7.6 or greater for the rename functionality to work

* 2.0) [iOS] cd .. to return to the root directory of the project
* 2.1) npm run rename - you'll be prompted to enter a project name and company name
* 2.2) Note down the package name value - you'll need this when setting up your Firebase project

### 3) Add Google Services files (plist & JSON)
* 3.1) [iOS] Follow the add firebase to your app instructions here to generate your GoogleService-Info.plist file if you haven't done so already - use the package name generated previously as your iOS bundle ID.
* 3.2) [iOS] Place this file in the ios/ directory of your project.
* 3.3) [Android] Follow the manually add firebase to your app instructions here to generate your google-services.json file if you haven't done so already - use the package name generated previously as your Android package name.
* 3.4) Place this file in the android/app/ directory of your project.

### 4) Start your app
* 4.1) Start the react native packager, run yarn run start or npm start from the root of your project.
* 4.2) [iOS] Build and run the iOS app, run expo start --ios from the root of your project. The first build will take some time. This will automatically start up a simulator also for you on a successful build if one wasn't already started.
* 4.3) [Android] If you haven't already got an android device attached/emulator running then you'll need to get one running (make sure the emulator is with Google Play / APIs). When ready run expo start --android from the root of your project.
* 4.4) [Web], run expo start --web from the root of your project.
If all has gone well you'll see an initial screen like the one below.

## ScreenShot
![image](https://s2.loli.net/2023/06/05/TtNE2qx7naKoHhG.png)![image](https://s2.loli.net/2023/06/05/Wr7xAFnmiTYtsE2.png)

## Why Dhyana?
## Languages
| language | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| JSON | 3 | 27,400 | 16 | 2 | 27,418 |
| JavaScript | 30 | 2,865 | 170 | 230 | 3,265 |
| TypeScript JSX | 10 | 856 | 9 | 109 | 974 |
| TypeScript | 3 | 21 | 0 | 2 | 23 |
| JSON with Comments | 1 | 4 | 0 | 1 | 5 |

## Directories
| path | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| . | 47 | 31,146 | 195 | 344 | 31,685 |
| . (Files) | 7 | 27,440 | 21 | 16 | 27,477 |
| assets | 2 | 47 | 0 | 2 | 49 |
| assets (Files) | 1 | 9 | 0 | 1 | 10 |
| assets/Songs | 1 | 38 | 0 | 1 | 39 |
| auth | 2 | 202 | 10 | 15 | 227 |
| config | 3 | 59 | 0 | 4 | 63 |
| constants | 2 | 16 | 0 | 4 | 20 |
| navigator | 1 | 137 | 0 | 9 | 146 |
| screens | 30 | 3,245 | 164 | 294 | 3,703 |
| screens (Files) | 19 | 2,481 | 157 | 207 | 2,845 |
| screens/component | 11 | 764 | 7 | 87 | 858 |


## Contributors
<a href="https://github.com/hwen554/hwen554/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hwen554/hwen554" />
</a>
<a href="https://github.com/dawnaliens"><img src="https://avatars.githubusercontent.com/u/50540121?v=4" title="dawnaliens" width="64" height="64"></a>
<a href="https://github.com/azha206"><img src="https://avatars.githubusercontent.com/u/88466015?v=4" title="azha206" width="64" height="64"></a>
<a href="https://github.com/b7t9"><img src="https://avatars.githubusercontent.com/u/102001709?v=4" title="b7t9" width="64" height="64"></a>
<a href="https://github.com/isabelxyz"><img src="https://avatars.githubusercontent.com/u/126944889?v=4" title="isabelxyz" width="64" height="64"></a>
<a href="https://github.com/ZhengxuanSun"><img src="https://avatars.githubusercontent.com/u/127571837?v=4" title="ZhengxuanSun" width="64" height="64"></a>

## Contributing
Dhyana is still under development. More functions and features are going to be added and we always welcome contributions to help make Dhyana better. If you would like to contribute, please contact us.

## Acknowledgment
Dhyana was previously a reinforcement meditation application based on IPAPP. You can check out the branch priv for more detail. 
Team 2 member: Gavin Weng(Full Stack), Annan Zhang(Front-end), Rechard Liu(Back-end), Isabel Zhang(Front-end), Amy Zhang(UI Design), Teddy Sun(Source maker and app Tester)
We would like to thank Asma and Allan, Auckland University for providing such an excellent CS research project.

