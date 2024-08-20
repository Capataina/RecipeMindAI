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
                    toggleIngredient={() => toggleIngredient(ingredient)}
                    isSelected={selectedIngredients.includes(ingredient)}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    ingredientGroup: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#F0E0C0',
        padding: 10,
        borderRadius: 8,
        width: '100%',
    },
    groupName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#3A3A3A',
    },
});