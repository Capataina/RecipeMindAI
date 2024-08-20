import React, {useState} from 'react';
import {ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export default function MealPlanning() {
    const [numMeals, setNumMeals] = useState('3');
    const [numSnacks, setNumSnacks] = useState('2');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [activityLevel, setActivityLevel] = useState('moderate');
    const [dietaryPreference, setDietaryPreference] = useState('');
    const [allergies, setAllergies] = useState('');
    const [useMetricSystem, setUseMetricSystem] = useState(true);
    const [highProtein, setHighProtein] = useState(false);

    const calculateCalories = () => {
        if (!height || !weight || !age) {
            return null;
        }

        const heightCm = useMetricSystem ? parseFloat(height) : parseFloat(height) * 2.54;
        const weightKg = useMetricSystem ? parseFloat(weight) : parseFloat(weight) / 2.2046;
        const ageYears = parseFloat(age);

        // Rough bodyfat estimation for accuracy
        const bodyFatPercentage = 1.20 * (weightKg / Math.pow(heightCm / 100, 2)) + 0.23 * ageYears - 16.2;
        const leanBodyMass = weightKg * (1 - bodyFatPercentage / 100);

        // Calculate BMR using both Mifflin-St Jeor and Katch-McArdle formulas
        const bmrMifflin = 10 * weightKg + 6.25 * heightCm - 5 * ageYears + 5;
        const bmrKatchMcArdle = 370 + (21.6 * leanBodyMass);

        // Take the average of the calculations
        const bmr = (bmrMifflin + bmrKatchMcArdle) / 2;

        // Apply activity factor
        const activityFactors = {
            light: 1.275,
            moderate: 1.5,
            very: 1.7
        };

        // Calculate TDEE and apply a slight reduction factor for accuracy
        const tdee = bmr * activityFactors[activityLevel] * 0.95;

        return Math.round(tdee);
    };

    const calculateProteinTarget = () => {
        if (!weight || !highProtein) return null;
        const weightKg = useMetricSystem ? parseFloat(weight) : parseFloat(weight) / 2.2046;
        return Math.round(weightKg * 2); // 2g per kg of body weight
    };

    const handleSubmit = () => {
        const estimatedCalories = calculateCalories();
        const proteinTarget = calculateProteinTarget();
        const formData = {
            numMeals,
            numSnacks,
            height: useMetricSystem ? height : convertToMetric(height, 'height'),
            weight: useMetricSystem ? weight : convertToMetric(weight, 'weight'),
            age,
            activityLevel,
            dietaryPreference,
            allergies,
            estimatedCalories,
            highProtein,
            proteinTarget
        };
        console.log(formData);

        const dataForAI = {
            numMeals,
            numSnacks,
            estimatedCalories,
            highProtein,
            proteinTarget,
            dietaryPreference,
            allergies
        }
    };

    const convertToMetric = (value, type) => {
        if (type === 'height') {
            // Convert inches to cm
            return (parseFloat(value) * 2.54).toFixed(2);
        } else if (type === 'weight') {
            // Convert lbs to kg
            return (parseFloat(value) / 2.2046).toFixed(2);
        }
        return value;
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Meal Planning</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Number of Meals:</Text>
                <TextInput
                    style={styles.input}
                    value={numMeals}
                    onChangeText={setNumMeals}
                    keyboardType="numeric"
                    placeholder="Enter number of meals"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Number of Snacks:</Text>
                <TextInput
                    style={styles.input}
                    value={numSnacks}
                    onChangeText={setNumSnacks}
                    keyboardType="numeric"
                    placeholder="Enter number of snacks"
                />
            </View>

            <View style={styles.switchContainer}>
                <Text style={styles.label}>Use Metric System:</Text>
                <Switch
                    value={useMetricSystem}
                    onValueChange={setUseMetricSystem}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Height ({useMetricSystem ? 'cm' : 'inches'}):</Text>
                <TextInput
                    style={styles.input}
                    value={height}
                    onChangeText={setHeight}
                    keyboardType="numeric"
                    placeholder={`Enter your height in ${useMetricSystem ? 'cm' : 'inches'}`}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Weight ({useMetricSystem ? 'kg' : 'lbs'}):</Text>
                <TextInput
                    style={styles.input}
                    value={weight}
                    onChangeText={setWeight}
                    keyboardType="numeric"
                    placeholder={`Enter your weight in ${useMetricSystem ? 'kg' : 'lbs'}`}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Age:</Text>
                <TextInput
                    style={styles.input}
                    value={age}
                    onChangeText={setAge}
                    keyboardType="numeric"
                    placeholder="Enter your age"
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Activity Level:</Text>
                <Picker
                    selectedValue={activityLevel}
                    onValueChange={(itemValue) => setActivityLevel(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="Lightly Active (0-5000 steps a day)" value="light"/>
                    <Picker.Item label="Moderately Active (5000-15000 steps a day)" value="moderate"/>
                    <Picker.Item label="Very Active (15000+ steps a day)" value="very"/>
                </Picker>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Dietary Preference:</Text>
                <Picker
                    selectedValue={dietaryPreference}
                    onValueChange={(itemValue) => setDietaryPreference(itemValue)}
                    style={styles.picker}
                >
                    <Picker.Item label="No preference" value=""/>
                    <Picker.Item label="Vegetarian" value="vegetarian"/>
                    <Picker.Item label="Vegan" value="vegan"/>
                    <Picker.Item label="Pescatarian" value="pescatarian"/>
                    <Picker.Item label="Keto" value="keto"/>
                    <Picker.Item label="Paleo" value="paleo"/>
                </Picker>
            </View>

            <View style={styles.switchContainer}>
                <Text style={styles.label}>High Protein Diet:</Text>
                <Switch
                    value={highProtein}
                    onValueChange={setHighProtein}
                />
            </View>
            {highProtein && (
                <Text style={styles.infoText}>
                    Protein target: {calculateProteinTarget() || '--'} g
                    (2x body weight in kg)
                </Text>
            )}

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Allergies or Intolerances:</Text>
                <TextInput
                    style={styles.input}
                    value={allergies}
                    onChangeText={setAllergies}
                    placeholder="Enter allergies (comma-separated)"
                    multiline
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Generate Meal Plan</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0E0C0',
        padding: 20,
        borderRadius: 10,
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#3A3A3A',
    },
    inputContainer: {
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#4A4A4A',
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
    },
    picker: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
    },
    button: {
        backgroundColor: '#7A6F5D',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
});