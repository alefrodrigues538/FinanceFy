import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainParamList } from "../types";

import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "../screens/Home";
import Transactions from "../screens/Transactions";
import Earnings from "../screens/Earnings";
import Expenses from "../screens/Expenses";
import Settings from "../screens/Settings";


const BottomTab = createBottomTabNavigator<MainParamList>();

export default function MainNavigator() {

    //TABS QUE NÃO DEVE APARECER
    const hiddenTabs = ["Settings"];

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarButton: hiddenTabs.includes(route.name) ? () => null : undefined,
            })}>
            <BottomTab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />
            }} />
            <BottomTab.Screen name="Transactions" component={Transactions} options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />
            }} />
            <BottomTab.Screen name="Earnings" component={Earnings} options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />
            }} />
            <BottomTab.Screen name="Expenses" component={Expenses} options={{
                tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />
            }} />
            <BottomTab.Screen name="Settings" component={Settings} />
        </BottomTab.Navigator >
    )
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}