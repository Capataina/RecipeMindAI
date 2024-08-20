// Ingredient.js
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export default function Ingredient({name, toggleIngredient, isSelected}) {
    return (
        <Pressable
            onPress={toggleIngredient}
            style={({pressed}) => [
                styles.ingredient,
                pressed && styles.pressed
            ]}
        >
            <View style={[styles.checkbox, isSelected && styles.checked]}/>
            <Text style={styles.ingredientName}>{name}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    ingredient: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        padding: 5,
    },
    pressed: {
        opacity: 0.7,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#000',
        marginRight: 10,
    },
    checked: {
        backgroundColor: '#000',
    },
    ingredientName: {
        fontSize: 16,
    },
});