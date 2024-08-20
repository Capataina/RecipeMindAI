import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import IngredientColumn from "./IngredientColumn";

const ingredientData = [
    {
        column: "right",
        groups: [
            {
                name: "Fruits",
                ingredients: [
                    "Apple", "Banana", "Mango", "Pineapple", "Kiwi", "Coconut",
                    "Blueberry", "Raspberry", "Blackberry", "Strawberry",
                    "Melon", "Watermelon", "Grapes", "Orange", "Pomegranate", "Cherry"
                ]
            },
            {
                name: "Vegetables",
                ingredients: [
                    "Bell Peppers", "Broccoli", "Potatoes", "Carrots", "Tomatoes", "Onions",
                    "Lettuce", "Cauliflower", "Spinach", "Cucumber", "Zucchini", "Eggplant",
                    "Mushrooms", "Corn", "Peas", "Green Beans", "Brussels Sprouts"
                ]
            }
        ]
    },
    {
        column: "left",
        groups: [
            {
                name: "Proteins",
                ingredients: ["Chicken Breast", "Chicken Thighs", "Turkey Mince", "Minced Beef", "Tofu", "Salmon", "Tuna", "Shrimp", "Greek Yogurt", "Cottage Cheese", "Lentils", "Beans", "Chickpeas", "Whey Protein", "Casein Protein"]
            },
            {
                name: "Grains",
                ingredients: ["Rice", "Pasta", "Quinoa", "Oats", "Couscous", "Buckwheat", "Bulgur"]
            },
            {
                name: "Fats",
                ingredients: ["Avocado", "Almonds", "Walnuts", "Chia seeds", "Sunflower seeds", "Pumpkin seeds", "Macadamia nuts", "Cashews", "Olive oil", "Sesame oil", "Butter"]
            }
        ]
    }
];

export default function IngredientList() {
    const [selectedIngredients, setSelectedIngredients] = React.useState([])

    const toggleIngredient = (ingredient) => {
        console.log('Toggling:', ingredient);
        setSelectedIngredients(prevSelected => {
            if (prevSelected.includes(ingredient)) {
                return prevSelected.filter(item => item !== ingredient);
            } else {
                return [...prevSelected, ingredient];
            }
        });
    };

    return (

        <View style={styles.ingredientList}>
            <View style={styles.ingredientListColumns}>
                {ingredientData.map((columnData, index) => (
                    <IngredientColumn
                        key={index}
                        data={columnData}
                        toggleIngredient={toggleIngredient}
                        selectedIngredients={selectedIngredients}
                    />
                ))}
            </View>
            <Text style={styles.ingredientListText}>Selected Ingredients: {selectedIngredients.join(", ")}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    ingredientList: {
        backgroundColor: '#E6D2B5',
        padding: 20,
        borderRadius: 10,
    },
    ingredientListColumns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ingredientListText: {
        marginTop: 20,
        fontSize: 16,
        textAlign: 'center',
        color: '#4A4A4A',
    }
});