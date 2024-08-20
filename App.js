import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import IngredientList from "./components/IngredientList";
import MealPlanning from "./components/MealPlanning";
import MealList from "./components/MealList";

export default function App() {

    const generatedMeals = [
        // Example meals to test the app
        {
            title: "Spaghetti Bolognese",
            availableIngredients: ["Pasta", "Tomatoes", "Onions"],
            missingIngredients: ["Ground beef", "Garlic"],
            instructions: "Cook pasta, make sauce with beef and tomatoes, combine."
        },
        {
            title: "Vegetable Stir Fry",
            availableIngredients: ["Rice", "Carrots", "Bell peppers"],
            missingIngredients: ["Soy sauce", "Ginger"],
            instructions: "Cook rice, stir fry vegetables, add sauce, serve over rice."
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.content}>
                    <IngredientList/>
                    <MealPlanning></MealPlanning>
                    <MealList meals={generatedMeals}/>
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
        flexGrow: 1,
        padding: 20,
    },
});
