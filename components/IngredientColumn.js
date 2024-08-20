import React from 'react';
import {StyleSheet, View} from 'react-native';
import IngredientGroup from './IngredientGroup';

export default function IngredientColumn({data, toggleIngredient, selectedIngredients}) {
    return (
        <View style={styles.ingredientColumn}>
            {data.groups.map((group, index) => (
                <IngredientGroup
                    key={index}
                    group={group}
                    toggleIngredient={toggleIngredient}
                    selectedIngredients={selectedIngredients}
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    ingredientColumn: {
        width: '48%',
        alignItems: 'center', // Center the content horizontally
    },
});