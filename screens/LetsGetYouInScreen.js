import React from 'react';
import {
  Button,
  Divider,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const LetsGetYouInScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer scrollable={false} hasSafeArea={true}>
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'space-evenly',
            paddingLeft: 24,
            paddingRight: 24,
            paddingTop: 20,
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          source={imageSource(Images['LetsyouIn'])}
          style={StyleSheet.applyWidth(
            { height: 180, width: 344 },
            dimensions.width
          )}
        />
        {/* Let’s Get you in */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'Inter_700Bold',
              fontSize: 30,
            },
            dimensions.width
          )}
        >
          {'Let’s Get you in'}
        </Text>
        {/* Facebook */}
        <Touchable
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 2,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 2,
                borderRadius: 16,
                borderRightWidth: 2,
                borderTopWidth: 2,
                flexDirection: 'row',
                height: 60,
                justifyContent: 'center',
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['ObFB'])}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  marginLeft: 10,
                },
                dimensions.width
              )}
            >
              {'Continue with Facebook'}
            </Text>
          </View>
        </Touchable>
        {/* Google */}
        <Touchable
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 2,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 2,
                borderRadius: 16,
                borderRightWidth: 2,
                borderTopWidth: 2,
                flexDirection: 'row',
                height: 60,
                justifyContent: 'center',
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['ObGoogle'])}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  marginLeft: 10,
                },
                dimensions.width
              )}
            >
              {'Continue with Google'}
            </Text>
          </View>
        </Touchable>
        {/* Apple */}
        <Touchable
          style={StyleSheet.applyWidth({ width: '100%' }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                borderBottomWidth: 2,
                borderColor: theme.colors.border.brand,
                borderLeftWidth: 2,
                borderRadius: 16,
                borderRightWidth: 2,
                borderTopWidth: 2,
                flexDirection: 'row',
                height: 60,
                justifyContent: 'center',
                width: '100%',
              },
              dimensions.width
            )}
          >
            <Image
              resizeMode={'cover'}
              source={imageSource(Images['ObApple'])}
              style={StyleSheet.applyWidth(
                { height: 24, width: 24 },
                dimensions.width
              )}
            />
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: theme.colors.text.strong,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 16,
                  marginLeft: 10,
                },
                dimensions.width
              )}
            >
              {'Continue with Apple'}
            </Text>
          </View>
        </Touchable>
        {/* OR */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              height: 45,
              justifyContent: 'space-between',
              width: '100%',
            },
            dimensions.width
          )}
        >
          <Divider
            color={theme.colors.border.brand}
            style={StyleSheet.applyWidth(
              { height: 2, width: '40%' },
              dimensions.width
            )}
          />
          {/* OR */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_400Regular',
                fontSize: 18,
                marginLeft: 20,
                marginRight: 20,
              },
              dimensions.width
            )}
          >
            {'or'}
          </Text>
          <Divider
            color={theme.colors.border.brand}
            style={StyleSheet.applyWidth(
              { height: 2, width: '40%' },
              dimensions.width
            )}
          />
        </View>
        {/* Sign in with Password */}
        <Button
          iconPosition={'left'}
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors.branding.primary,
              borderRadius: 100,
              fontFamily: 'Inter_600SemiBold',
              fontSize: 16,
              height: 58,
              textAlign: 'center',
              width: '100%',
            },
            dimensions.width
          )}
          title={'Sign in with Password'}
        />
        {/* Sign up */}
        <Touchable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                paddingBottom: 10,
                paddingTop: 10,
              },
              dimensions.width
            )}
          >
            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color_20'],
                  fontFamily: 'Inter_400Regular',
                },
                dimensions.width
              )}
            >
              {'Don’t have an account?'}
            </Text>

            <Text
              accessible={true}
              selectable={false}
              style={StyleSheet.applyWidth(
                {
                  color: palettes.App['Custom Color'],
                  fontFamily: 'Inter_500Medium',
                  marginLeft: 7,
                },
                dimensions.width
              )}
            >
              {'Sign up'}
            </Text>
          </View>
        </Touchable>
      </View>
    </ScreenContainer>
  );
};

export default withTheme(LetsGetYouInScreen);
