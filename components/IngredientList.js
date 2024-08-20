import {StyleSheet, View} from 'react-native';
import IngredientColumn from "./IngredientColumn";

export default function IngredientList({  }) {
    return (
        <View style={styles.ingredientList}>
            <View style={styles.ingredientListColumns}>
                <IngredientColumn></IngredientColumn>
                <IngredientColumn></IngredientColumn>
            </View>
            <text style={styles.ingredientListText}></text>
        </View>
    );
}

const styles = StyleSheet.create({
    ingredientList: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },
    ingredientListColumns:{

    },
    ingredientListText:{

    }
});