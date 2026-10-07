import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, } from 'react-native';
import styles from './Styles';

export default function Booking() {
  return (
    <SafeAreaView style={styles.bookingSafeArea}>
      <ScrollView>

        /* Page heading */
        <View style={styles.bookingHeader}>
          <Text style={styles.bookingHeaderText}>Bookings</Text>
        </View>

        /* Step 1 */
        <View style={styles.bookingSection}>
          <Image
            source={require('._images/booking1.png')}
            style={styles.bookingImage}
            resizeMode="contain"
          />

          <Text style={styles.bookingStepTitle}>
            Complete and Submit Membership Form
          </Text>

          <Text style={styles.bookingStepText}>
            Go to the Membership page and complete and submit the membership
            form.
          </Text>
        </View>

        /* Step 2 */
        <View style={styles.bookingSection}>
          <Image
            source={require('../assets/booking2.png')}
            style={styles.bookingImage}
            resizeMode="contain"
          />

          <Text style={styles.bookingStepTitle}>
            Choose your Mog and Date
          </Text>

          <Text style={styles.bookingStepText}>
            Choose your Mog from the list of available Mogs and select the
            required date.
          </Text>
        </View>

        /* Step 3 */
        <View style={styles.bookingSection}>
          <Image
            source={require('../assets/booking3.png')}
            style={styles.bookingImage}
            resizeMode="contain"
          />

          <Text style={styles.bookingStepTitle}>
            Collect your Mog
          </Text>

          <Text style={styles.bookingStepText}>
            Make suitable arrangements to collect your Mog from the Mog Hub
            depot.
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}