import * as React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {observer} from 'mobx-react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider as PaperProvider} from 'react-native-paper';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {KeyboardProvider} from 'react-native-keyboard-controller';
import {
  gestureHandlerRootHOC,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

import {uiStore} from './src/store';
import {useTheme} from './src/hooks';
import {Theme} from './src/utils/types';
import {initializeLookiePal} from './src/store/PalStore';

import {l10n} from './src/utils/l10n';
import {initLocale} from './src/utils';
import {L10nContext} from './src/utils';
import {ROUTES} from './src/utils/navigationConstants';

import {
  SidebarContent,
  ModelsHeaderRight,
  PalHeaderRight,
  HeaderLeft,
  AppWithMigration,
  AnimatedSpeedLines,
} from './src/components';
import {
  ChatScreen,
  ModelsScreen,
  SettingsScreen,
  BenchmarkScreen,
  AboutScreen,
  PalsScreen,

  // Dev tools screen. Only available in debug mode.
  DevToolsScreen,
} from './src/screens';

// Check if app is in debug mode
const isDebugMode = __DEV__;

const Drawer = createDrawerNavigator();

const screenWidth = Dimensions.get('window').width;

const App = observer(() => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const currentL10n = l10n[uiStore.language];

  // Initialize locale with the current language and create default pals
  React.useEffect(() => {
    initLocale(uiStore.language);
    initializeLookiePal();
  }, []);

  return (
    <GestureHandlerRootView style={styles.root}>
      <SafeAreaProvider>
        <KeyboardProvider statusBarTranslucent navigationBarTranslucent>
          <PaperProvider theme={theme}>
            <L10nContext.Provider value={currentL10n}>
              <NavigationContainer>
                <BottomSheetModalProvider>
                  {/* F1 Racing Background Animation */}
                  <AnimatedSpeedLines intensity="low" color="#E10600" />
                  <Drawer.Navigator
                    useLegacyImplementation={false}
                    screenOptions={{
                      headerLeft: () => <HeaderLeft />,
                      drawerStyle: {
                        width: screenWidth > 400 ? 320 : screenWidth * 0.8,
                      },
                      headerStyle: styles.headerWithoutDivider,
                      headerTintColor: theme.colors.onBackground,
                      headerTitleStyle: styles.headerTitle,
                    }}
                    drawerContent={props => <SidebarContent {...props} />}>
                    <Drawer.Screen
                      name={ROUTES.CHAT}
                      component={gestureHandlerRootHOC(ChatScreen)}
                      options={{
                        headerShown: false,
                      }}
                    />
                    <Drawer.Screen
                      name={ROUTES.MODELS}
                      component={gestureHandlerRootHOC(ModelsScreen)}
                      options={{
                        headerRight: () => <ModelsHeaderRight />,
                        headerStyle: styles.headerWithoutDivider,
                        title: currentL10n.screenTitles.models,
                      }}
                    />
                    <Drawer.Screen
                      name={ROUTES.PALS}
                      component={gestureHandlerRootHOC(PalsScreen)}
                      options={{
                        headerRight: () => <PalHeaderRight />,
                        headerStyle: styles.headerWithoutDivider,
                        title: currentL10n.screenTitles.pals,
                      }}
                    />
                    <Drawer.Screen
                      name={ROUTES.BENCHMARK}
                      component={gestureHandlerRootHOC(BenchmarkScreen)}
                      options={{
                        headerStyle: styles.headerWithoutDivider,
                        title: currentL10n.screenTitles.benchmark,
                      }}
                    />
                    <Drawer.Screen
                      name={ROUTES.SETTINGS}
                      component={gestureHandlerRootHOC(SettingsScreen)}
                      options={{
                        headerStyle: styles.headerWithoutDivider,
                        title: currentL10n.screenTitles.settings,
                      }}
                    />
                    <Drawer.Screen
                      name={ROUTES.APP_INFO}
                      component={gestureHandlerRootHOC(AboutScreen)}
                      options={{
                        headerStyle: styles.headerWithoutDivider,
                        title: currentL10n.screenTitles.appInfo,
                      }}
                    />

                    {/* Only show Dev Tools screen in debug mode */}
                    {isDebugMode && (
                      <Drawer.Screen
                        name={ROUTES.DEV_TOOLS}
                        component={gestureHandlerRootHOC(DevToolsScreen)}
                        options={{
                          headerStyle: styles.headerWithoutDivider,
                          title: 'Dev Tools',
                        }}
                      />
                    )}
                  </Drawer.Navigator>
                </BottomSheetModalProvider>
              </NavigationContainer>
            </L10nContext.Provider>
          </PaperProvider>
        </KeyboardProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
});

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    root: {
      flex: 1,
<<<<<<< HEAD
      backgroundColor: '#0A0A0A', // F1 Dark racing background
=======
      backgroundColor: '#000000',
>>>>>>> 083e201e01c56783e564228be2039e30f46fe19c
    },
    headerWithoutDivider: {
      elevation: 0,
      shadowOpacity: 0,
      borderBottomWidth: 0,
<<<<<<< HEAD
      backgroundColor: '#121212', // F1 Surface color
      borderBottomColor: 'rgba(255, 107, 53, 0.2)', // F1 Orange accent
      borderBottomWidth: 1,
    },
    headerWithDivider: {
      backgroundColor: '#121212', // F1 Surface color
      borderBottomColor: 'rgba(255, 107, 53, 0.2)', // F1 Orange accent
      borderBottomWidth: 1,
    },
    headerTitle: {
      ...theme.fonts.titleSmall,
      color: theme.colors.onBackground,
      fontWeight: '600',
=======
      backgroundColor: '#000000',
      borderBottomColor: '#E10600',
      borderBottomWidth: 2,
    },
    headerWithDivider: {
      backgroundColor: '#000000',
      borderBottomColor: '#E10600',
      borderBottomWidth: 2,
    },
    headerTitle: {
      ...theme.fonts.titleSmall,
      color: '#E10600',
      fontWeight: 'bold',
    },
    // F1 Racing Background Elements
    racingBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.05,
    },
    speedLine: {
      position: 'absolute',
      height: 2,
      backgroundColor: '#E10600',
      transform: [{rotate: '15deg'}],
    },
    checkeredPattern: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: 40,
      height: 40,
      opacity: 0.1,
>>>>>>> 083e201e01c56783e564228be2039e30f46fe19c
    },
  });

// Wrap the App component with AppWithMigration to show migration UI when needed
const AppWithMigrationWrapper = () => {
  return (
    <AppWithMigration>
      <App />
    </AppWithMigration>
  );
};

export default AppWithMigrationWrapper;
