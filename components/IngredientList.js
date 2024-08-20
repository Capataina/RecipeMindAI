import React from "react";
import {StyleSheet, Text, View} from 'react-native';
import IngredientColumn from "./IngredientColumn";

const ingredientData = [
    {
        column: "right",
        groups: [
            {
                name: "Fruits",
                ingredients: ["Apple", "Banana", "Mango"]
            },
            {
                name: "Vegetables",
                ingredients: ["Bell Peppers", "Broccoli", "Potatoes"]
            }
        ]
    },
    {
        column: "left",
        groups: [
            {
                name: "Proteins",
                ingredients: ["Chicken Breast", "Minced Beef", "Tofu"]
            },
            {
                name: "Grains",
                ingredients: ["Rice", "Pasta", "Beans"]
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
        width: '60%',
        padding: 10,
    },
    ingredientListColumns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ingredientListText: {
        marginTop: 20,
        fontSize: 16,
    }
});