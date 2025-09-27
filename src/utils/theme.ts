import {
  MD3DarkTheme,
  DefaultTheme as PaperLightTheme,
  configureFonts,
} from 'react-native-paper';

import {MD3BaseColors, SemanticColors, Theme} from './types';
import {withOpacity, stateLayerOpacity} from './colorUtils';

// MD3 key colors (seed colors)
// ApexCore F1-inspired palette: F1 orange, silver accents, dark racing theme
const md3BaseColors: Partial<MD3BaseColors> = {
  primary: '#FF6B35', // F1 Orange
  secondary: '#C0C0C0', // Silver (Mercedes style)
  tertiary: '#FFD700', // Gold highlights
  error: '#FF4444', // Racing red
};

const createBaseColors = (isDark: boolean): MD3BaseColors => {
  const baseTheme = isDark ? MD3DarkTheme : PaperLightTheme;

  if (isDark) {
    return {
      ...baseTheme.colors,
      primary: md3BaseColors.primary!,
      onPrimary: '#FFFFFF',
      primaryContainer: '#1A1A1A',
      onPrimaryContainer: '#FF6B35',
      secondary: md3BaseColors.secondary!,
      onSecondary: '#000000',
      secondaryContainer: '#2A2A2A',
      onSecondaryContainer: '#C0C0C0',
      tertiary: md3BaseColors.tertiary!,
      onTertiary: '#000000',
      tertiaryContainer: '#2A2A00',
      onTertiaryContainer: '#FFD700',
      error: md3BaseColors.error!,
      onError: '#FFFFFF',
      errorContainer: '#5A1414',
      onErrorContainer: '#FFE2E2',
      background: '#0A0A0A', // Dark racing background
      onBackground: '#FFFFFF',
      surface: '#121212', // Slightly lighter than background
      onSurface: '#FFFFFF',
      surfaceVariant: '#1A1A1A',
      onSurfaceVariant: '#C0C0C0',
      outline: '#333333',
      outlineVariant: '#666666',
      // Additional required MD3 colors
      surfaceDisabled: withOpacity('#1E1E1F', 0.12),
      onSurfaceDisabled: withOpacity('#C0C0C0', 0.38),
      inverseSurface: '#FFFFFF',
      inverseOnSurface: '#000000',
      inversePrimary: '#1A1A1A',
      inverseSecondary: md3BaseColors.secondary!,
      shadow: '#000000',
      scrim: 'rgba(0, 0, 0, 0.5)',
      backdrop: 'rgba(10, 10, 10, 0.9)',
    };
  }

  return {
    ...baseTheme.colors,
    primary: md3BaseColors.primary!,
    onPrimary: '#FFFFFF',
    primaryContainer: '#161616',
    onPrimaryContainer: '#F0F0F0',
    secondary: md3BaseColors.secondary!,
    onSecondary: '#FFFFFF',
    secondaryContainer: '#FFE5E3',
    onSecondaryContainer: '#400100',
    tertiary: md3BaseColors.tertiary!,
    onTertiary: '#001014',
    tertiaryContainer: '#D0FBFF',
    onTertiaryContainer: '#001F24',
    error: md3BaseColors.error!,
    onError: '#FFFFFF',
    errorContainer: '#FFE8E8',
    onErrorContainer: '#3D0E0E',
    background: '#FFFFFF',
    onBackground: '#0B0B0C',
    surface: '#FAFAFA',
    onSurface: '#1A1A1B',
    surfaceVariant: '#E9E9EA',
    onSurfaceVariant: '#4A4A4C',
    outline: withOpacity('#0B0B0C', 0.06),
    outlineVariant: '#B8B8BA',
    // Additional required MD3 colors
    surfaceDisabled: withOpacity('#0F0F10', 0.12),
    onSurfaceDisabled: withOpacity('#8A8A8E', 0.38),
    inverseSurface: '#1A1A1B',
    inverseOnSurface: '#FAFAFA',
    inversePrimary: '#161616',
    inverseSecondary: md3BaseColors.secondary!,
    shadow: '#000000',
    scrim: 'rgba(0, 0, 0, 0.25)',
    backdrop: 'rgba(16, 16, 16, 0.7)',
  };
};

const createSemanticColors = (
  baseColors: MD3BaseColors,
  isDark: boolean,
): SemanticColors => ({
  // Surface variants
  surfaceContainerHighest: isDark
    ? withOpacity(baseColors.surface, 0.22)
    : withOpacity(baseColors.primary, 0.05),
  surfaceContainerHigh: isDark
    ? withOpacity(baseColors.surface, 0.16)
    : withOpacity(baseColors.primary, 0.03),
  surfaceContainer: isDark
    ? withOpacity(baseColors.surface, 0.12)
    : withOpacity(baseColors.primary, 0.02),
  surfaceContainerLow: isDark
    ? withOpacity(baseColors.surface, 0.08)
    : withOpacity(baseColors.primary, 0.01),
  surfaceContainerLowest: isDark
    ? withOpacity(baseColors.surface, 0.04)
    : baseColors.surface,
  surfaceDim: isDark
    ? withOpacity(baseColors.surface, 0.06)
    : withOpacity(baseColors.primary, 0.06),
  surfaceBright: isDark
    ? withOpacity(baseColors.surface, 0.24)
    : baseColors.surface,

  border: withOpacity(baseColors.onSurface, 0.05),
  placeholder: withOpacity(baseColors.onSurface, 0.3),
  text: baseColors.onBackground,
  textSecondary: withOpacity(baseColors.onSurface, 0.5),
  inverseText: baseColors.inverseOnSurface,
  inverseTextSecondary: withOpacity(baseColors.inverseOnSurface, 0.5),

  // Interactive states
  stateLayerOpacity: 0.12,
  hoverStateOpacity: stateLayerOpacity.hover,
  pressedStateOpacity: stateLayerOpacity.pressed,
  draggedStateOpacity: stateLayerOpacity.dragged,
  focusStateOpacity: stateLayerOpacity.focus,

  // Menu specific
  menuBackground: isDark ? '#2a2a2a' : baseColors.surface,
  menuBackgroundDimmed: withOpacity(baseColors.surface, 0.9),
  menuBackgroundActive: withOpacity(baseColors.primary, 0.08),
  menuSeparator: withOpacity(baseColors.primary, 0.5),
  menuGroupSeparator: isDark
    ? withOpacity('#FFFFFF', 0.08)
    : withOpacity('#000000', 0.08),
  menuText: baseColors.onSurface,
  menuDangerText: baseColors.error,

  // Message specific
  authorBubbleBackground: isDark ? '#212121' : '#f2f2f2',
  receivedMessageDocumentIcon: baseColors.primary,
  sentMessageDocumentIcon: baseColors.onSurface,
  userAvatarImageBackground: 'transparent',
  userAvatarNameColors: [
    baseColors.primary,
    baseColors.secondary,
    baseColors.tertiary,
    baseColors.error,
  ],
  searchBarBackground: isDark
    ? 'rgba(28, 28, 30, 0.92)'
    : 'rgba(118, 118, 128, 0.12)',

  // Thinking bubble specific (techy cyan)
  thinkingBubbleBackground: isDark ? '#07212A' : '#E8FBFF',
  thinkingBubbleText: isDark ? '#7CEBFF' : '#003845',
  thinkingBubbleBorder: isDark
    ? 'rgba(0, 229, 255, 0.45)'
    : 'rgba(0, 56, 69, 0.25)',
  thinkingBubbleShadow: isDark ? '#00E5FF' : '#00A2B5',
  thinkingBubbleChevronBackground: isDark
    ? 'rgba(0, 229, 255, 0.12)'
    : 'rgba(0, 162, 181, 0.08)',
  thinkingBubbleChevronBorder: isDark
    ? 'rgba(0, 229, 255, 0.28)'
    : 'rgba(0, 56, 69, 0.18)',
});

export const fontStyles = {
  regular: {fontFamily: 'Inter-Regular'},
  medium: {fontFamily: 'Inter-Medium'},
  bold: {fontFamily: 'Inter-Bold'},
  thin: {fontFamily: 'Inter-Thin'},
  light: {fontFamily: 'Inter-Light'},
  semibold: {fontFamily: 'Inter-SemiBold'},
  extraBold: {fontFamily: 'Inter-ExtraBold'},
};

const baseFontVariants = configureFonts({
  config: {...fontStyles.regular},
});

const customVariants = {
  // Add custom variants:
  bold: {
    ...baseFontVariants.bodyMedium,
    ...fontStyles.bold,
  },
  medium: {
    ...baseFontVariants.bodyMedium,
    ...fontStyles.medium,
  },
  thin: {
    ...baseFontVariants.bodyMedium,
    ...fontStyles.thin,
  },
  light: {
    ...baseFontVariants.bodyMedium,
    ...fontStyles.light,
  },
  semibold: {
    ...baseFontVariants.bodyMedium,
    ...fontStyles.semibold,
  },
} as const;

const configuredFonts = configureFonts({
  config: {
    ...baseFontVariants,
    ...customVariants,
    displayMedium: {
      ...baseFontVariants.displayMedium,
      ...fontStyles.bold,
    },
    titleSmall: {
      ...baseFontVariants.titleSmall,
      ...fontStyles.medium,
    },
  },
});

const createTheme = (isDark: boolean): Theme => {
  const baseTheme = isDark ? MD3DarkTheme : PaperLightTheme;
  const baseColors = createBaseColors(isDark);
  const semanticColors = createSemanticColors(baseColors, isDark);

  return {
    ...baseTheme,
    colors: {
      ...baseColors,
      ...semanticColors,
    },
    borders: {
      inputBorderRadius: 16,
      messageBorderRadius: 15,
      default: 12,
    },
    fonts: {
      ...baseTheme.fonts,
      ...configuredFonts,
      titleMediumLight: {
        ...fontStyles.regular,
        fontSize: 16,
        lineHeight: 22,
      },
      dateDividerTextStyle: {
        ...fontStyles.extraBold,
        color: baseColors.onSurface,
        fontSize: 12,
        lineHeight: 16,
        opacity: 0.4,
      },
      emptyChatPlaceholderTextStyle: {
        color: baseColors.onSurface,
        fontSize: 16,
        lineHeight: 24,
        ...fontStyles.medium,
      },
      inputTextStyle: {
        fontSize: 16,
        lineHeight: 24,
        ...fontStyles.medium,
      },
      receivedMessageBodyTextStyle: {
        color: baseColors.onPrimary,
        fontSize: 16,
        lineHeight: 24,
        ...fontStyles.medium,
      },
      receivedMessageCaptionTextStyle: {
        color: baseColors.onSurfaceVariant,
        fontSize: 12,
        lineHeight: 16,
        ...fontStyles.medium,
      },
      receivedMessageLinkDescriptionTextStyle: {
        color: baseColors.onPrimary,
        fontSize: 14,
        lineHeight: 20,
        ...fontStyles.regular,
      },
      receivedMessageLinkTitleTextStyle: {
        color: baseColors.onPrimary,
        fontSize: 16,
        lineHeight: 22,
        ...fontStyles.extraBold,
      },
      sentMessageBodyTextStyle: {
        color: baseColors.onSurface,
        fontSize: 16,
        lineHeight: 24,
        ...fontStyles.medium,
      },
      sentMessageCaptionTextStyle: {
        color: baseColors.onSurfaceVariant,
        fontSize: 12,
        lineHeight: 16,
        ...fontStyles.medium,
      },
      sentMessageLinkDescriptionTextStyle: {
        color: baseColors.onSurface,
        fontSize: 14,
        lineHeight: 20,
        ...fontStyles.regular,
      },
      sentMessageLinkTitleTextStyle: {
        color: baseColors.onSurface,
        fontSize: 16,
        lineHeight: 22,
        ...fontStyles.extraBold,
      },
      userAvatarTextStyle: {
        color: baseColors.onSurface,
        fontSize: 12,
        lineHeight: 16,
        ...fontStyles.extraBold,
      },
      userNameTextStyle: {
        fontSize: 12,
        lineHeight: 16,
        ...fontStyles.extraBold,
      },
    },
    insets: {
      messageInsetsHorizontal: 20,
      messageInsetsVertical: 10,
    },
    spacing: {
      default: 16,
    },
    icons: {},
  };
};

export const lightTheme = createTheme(false);
export const darkTheme = createTheme(true);
