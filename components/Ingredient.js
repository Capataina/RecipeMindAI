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
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFFFFF',
        width: '90%',
    },
    pressed: {
        opacity: 0.7,
    },
    selected: {
        backgroundColor: '#D4C4A7', // Darker background when selected
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#7A6F5D',
        marginRight: 10,
        borderRadius: 4,
    },
    checked: {
        backgroundColor: '#7A6F5D',
    },
    ingredientName: {
        fontSize: 16,
        color: '#4A4A4A',
    },
    selectedText: {
        fontWeight: 'bold',
        color: '#3A3A3A',
    },
});