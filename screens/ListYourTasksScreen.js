import React from 'react';
import {
  Checkbox,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as ToDoListApiApi from '../apis/ToDoListApiApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const ListYourTasksScreen = props => {
  const { theme, navigation } = props;
  const dimensions = useWindowDimensions();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
    >
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          { alignItems: 'center', flexDirection: 'row', paddingLeft: 20 },
          dimensions.width
        )}
      >
        {/* Back btn */}
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                height: 44,
                justifyContent: 'center',
                width: 44,
              },
              dimensions.width
            )}
          >
            <Icon size={24} name={'AntDesign/arrowleft'} />
          </View>
        </Touchable>
        {/* Screen Heading */}
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
          {'To Do'}
        </Text>
      </View>

      <ScrollView
        bounces={true}
        horizontal={false}
        keyboardShouldPersistTaps={'never'}
        nestedScrollEnabled={false}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={StyleSheet.applyWidth(
          {
            marginTop: 10,
            paddingBottom: 20,
            paddingLeft: 20,
            paddingRight: 20,
            paddingTop: 10,
          },
          dimensions.width
        )}
      >
        {/* Heading */}
        <Text
          accessible={true}
          selectable={false}
          style={StyleSheet.applyWidth(
            {
              color: theme.colors.text.strong,
              fontFamily: 'Inter_500Medium',
              fontSize: 21,
            },
            dimensions.width
          )}
        >
          {'What we up to today?'}
        </Text>
        {/* Medicine List */}
        <ToDoListApiApi.FetchListTasksGET>
          {({ loading, error, data, refetchListTasks }) => {
            const medicineListData = data?.json;
            if (loading) {
              return <ActivityIndicator />;
            }

            if (error || data?.status < 200 || data?.status >= 300) {
              return <ActivityIndicator />;
            }

            return (
              <FlashList
                data={medicineListData}
                estimatedItemSize={50}
                horizontal={false}
                inverted={false}
                keyExtractor={(flashListData, index) => flashListData?.id}
                listKey={'aUTXzvb6'}
                numColumns={1}
                onEndReachedThreshold={0.5}
                renderItem={({ item, index }) => {
                  const flashListData = item;
                  return (
                    <Touchable
                      style={StyleSheet.applyWidth(
                        { marginTop: 20 },
                        dimensions.width
                      )}
                    >
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            backgroundColor: palettes.App['Custom Color'],
                            borderRadius: 12,
                            flexDirection: 'row',
                            height: 104,
                            paddingLeft: 12,
                          },
                          dimensions.width
                        )}
                      >
                        <Image
                          resizeMode={'cover'}
                          source={imageSource('https://picsum.photos/64')}
                          style={StyleSheet.applyWidth(
                            { borderRadius: 4, height: 80, width: 80 },
                            dimensions.width
                          )}
                        />
                        <View
                          style={StyleSheet.applyWidth(
                            { flex: 1, marginLeft: 15 },
                            dimensions.width
                          )}
                        >
                          {/* Name */}
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.text.strong,
                                fontFamily: 'Inter_500Medium',
                                fontSize: 16,
                              },
                              dimensions.width
                            )}
                          >
                            {flashListData?.title}
                          </Text>
                          {/* Address */}
                          <Text
                            accessible={true}
                            selectable={false}
                            style={StyleSheet.applyWidth(
                              {
                                color: theme.colors.text.strong,
                                fontFamily: 'Inter_300Light',
                                fontSize: 12,
                                marginTop: 5,
                                opacity: 0.7,
                              },
                              dimensions.width
                            )}
                          >
                            {flashListData?.description}
                          </Text>
                          {/* Distance */}
                          <View
                            style={StyleSheet.applyWidth(
                              {
                                alignItems: 'center',
                                flexDirection: 'row',
                                marginTop: 12,
                              },
                              dimensions.width
                            )}
                          >
                            <Icon
                              color={theme.colors.branding.primary}
                              name={'Ionicons/warning-sharp'}
                              size={20}
                            />
                            <Text
                              accessible={true}
                              selectable={false}
                              style={StyleSheet.applyWidth(
                                {
                                  color: theme.colors.branding.primary,
                                  fontFamily: 'Inter_400Regular',
                                  fontSize: 13,
                                  marginLeft: 5,
                                },
                                dimensions.width
                              )}
                            >
                              {'Priority Matrix: '}
                              {flashListData?.urgency}
                            </Text>
                          </View>
                        </View>
                        <Checkbox
                          onUncheck={() => {
                            const handler = async () => {
                              const checkboxValue = undefined;
                              try {
                                (await ToDoListApiApi.listTasksGET(Constants))
                                  ?.json;
                              } catch (err) {
                                console.error(err);
                              }
                            };
                            handler();
                          }}
                          color={palettes.App.Option_Selected_Color}
                          defaultValue={medicineListData?.[0]?.completed}
                          size={50}
                          uncheckedColor={theme.colors.background.danger}
                        />
                      </View>
                    </Touchable>
                  );
                }}
                showsHorizontalScrollIndicator={true}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={StyleSheet.applyWidth(
                  { flex: 1 },
                  dimensions.width
                )}
              />
            );
          }}
        </ToDoListApiApi.FetchListTasksGET>
      </ScrollView>
    </ScreenContainer>
  );
};

export default withTheme(ListYourTasksScreen);
