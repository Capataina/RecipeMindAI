import {StyleSheet, Text, View} from 'react-native';
import Ingredient from "./Ingredient";

export default function IngredientGroup({group, toggleIngredient, selectedIngredients}) {
    return (
        <View style={styles.ingredientGroup}>
            <Text style={styles.groupName}>{group.name}</Text>
            {group.ingredients.map((ingredient, index) => (
                <Ingredient
                    key={index}
                    name={ingredient}
                    toggleIngredients={() => toggleIngredient(ingredient)}
                    isSelected={selectedIngredients.includes(ingredient)}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    ingredientGroup: {
        marginBottom: 20,
    },
    groupName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});