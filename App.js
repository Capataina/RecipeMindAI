import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import IngredientList from "./components/IngredientList";

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.content}>
                    <IngredientList/>
                    {/* Add other components here as needed */}
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
        flex: 1,
        padding: 20,
    },
});
