import { colors } from '@/styles/global';
import { NativeTabs } from 'expo-router/native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs
      blurEffect='systemDefault'
      backgroundColor={colors.background}
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
      >
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={"house"} md={"home"} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger
        name='add-meal'
      //options={{
      //  title: 'Add Meal',
      //  tabBarIcon: ({ color, size }) => (
      //    <Ionicons name='add-circle' size={size} color={color} />
      //  ),
      //}}
      >
        <NativeTabs.Trigger.Label>Add Meal</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={"plus"} md={"add_circle"} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger
        name='meals'
      //options={{
      //  title: 'All Meals',
      //  tabBarIcon: ({ color, size }) => (
      //    <Ionicons name='list' size={size} color={color} />
      //  ),
      //}}
      >
        <NativeTabs.Trigger.Label>All Meals</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={"list.clipboard"} md={"list"} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
