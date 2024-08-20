import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import IngredientList from "./components/IngredientList";
import MealPlanning from "./components/MealPlanning";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.content}>
                    <IngredientList/>
                    <MealPlanning></MealPlanning>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5E6D3',
    },
    scrollView: {
        flexGrow: 1,
    },
    content: {
        flex: 1,
        padding: 20,
    },
});
