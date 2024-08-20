import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const MealItem = ({meal}) => (
    <View style={styles.mealItem}>
        <Text style={styles.mealTitle}>{meal.title}</Text>

        <Text style={styles.sectionTitle}>Ingredients You Have:</Text>
        {meal.availableIngredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>{ingredient}</Text>
        ))}

        <Text style={styles.sectionTitle}>Ingredients You Might Need:</Text>
        {meal.missingIngredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>{ingredient}</Text>
        ))}

        <Text style={styles.sectionTitle}>Quick Instructions:</Text>
        <Text style={styles.instructions}>{meal.instructions}</Text>
    </View>
);

const MealList = ({meals}) => (
    <View style={styles.container}>
        <Text style={styles.title}>Generated Meals</Text>
        <FlatList
            data={meals}
            renderItem={({item}) => <MealItem meal={item}/>}
            keyExtractor={(item, index) => index.toString()}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F0E0C0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#3A3A3A',
    },
    mealItem: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
    },
    mealTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4A4A4A',
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 5,
        color: '#5A5A5A',
    },
    ingredient: {
        fontSize: 14,
        color: '#6A6A6A',
    },
    instructions: {
        fontSize: 14,
        color: '#6A6A6A',
        fontStyle: 'italic',
    },
});

export default MealList;