import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainParamList } from "../types";

import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/Home";
import Transactions from "../screens/Transactions";
import Earnings from "../screens/Earnings";
import Expenses from "../screens/Expenses";
import Settings from "../screens/Settings";
import Colors from "../constants/Colors";


const BottomTab = createBottomTabNavigator<MainParamList>();

export default function MainNavigator() {

    //TABS QUE NÃO DEVE APARECER
    const hiddenTabs = ["Settings"];

    return (
        <BottomTab.Navigator
            initialRouteName="Transactions"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarButton: hiddenTabs.includes(route.name) ? () => null : undefined,
                tabBarInactiveTintColor: Colors.gray,
                tabBarActiveTintColor: Colors.primary,
                tabBarStyle: { shadowOpacity: 0, shadowColor: '#0000', borderTopColor: '#0000' }
            })}>
            <BottomTab.Screen name="Transactions" component={Transactions} options={{
                tabBarIcon: ({ color }) => <MaterialIcons name="compare-arrows" size={30} color={color} />
            }} />
            <BottomTab.Screen name="Earnings" component={Earnings} options={{
                tabBarIcon: ({ color }) => <MaterialIcons name="payment" size={30} color={color} />
            }} />
            <BottomTab.Screen name="Expenses" component={Expenses} options={{
                tabBarIcon: ({ color }) => <MaterialIcons name="list-alt" size={30} color={color} />
            }} />

            <BottomTab.Screen name="Home" component={HomeScreen} options={{
                tabBarIcon: ({ color }) => <AntDesign name="appstore-o" size={30} color={color} />
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