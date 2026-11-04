import { NativeTabs } from 'expo-router/native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs
    //screenOptions={{
    //  headerShown: false,
    //  tabBarStyle: {
    //    backgroundColor: colors.background,
    //    borderTopColor: colors.surface,
    //  },
    //  tabBarActiveTintColor: colors.primary,
    //  tabBarInactiveTintColor: colors.textSecondary,
    //}}
    >
      <NativeTabs.Trigger
        name='index'
      //options={{
      //  title: 'Home',
      //  tabBarIcon: ({ color, size }) => (
      //    <Ionicons name='home' size={size} color={color} />
      //  ),
      //}}
      />
      <NativeTabs.Trigger
        name='add-meal'
      //options={{
      //  title: 'Add Meal',
      //  tabBarIcon: ({ color, size }) => (
      //    <Ionicons name='add-circle' size={size} color={color} />
      //  ),
      //}}
      />
      <NativeTabs.Trigger
        name='meals'
      //options={{
      //  title: 'All Meals',
      //  tabBarIcon: ({ color, size }) => (
      //    <Ionicons name='list' size={size} color={color} />
      //  ),
      //}}
      />
    </NativeTabs>
  );
}
