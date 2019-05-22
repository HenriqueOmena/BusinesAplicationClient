<template>
    <v-cotainer>
        <v-layout row wrap>
            <v-flex xs12>
                <h2>Login to System</h2>
            </v-flex>
            <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                    label="E-Mail"
                    v-model="email"
                    v-bind:rules="passwordRules"
                    required>
                </v-text-field>
                <v-text-field
                    label="Password"
                    v-model="password"
                    v-bind:rules="passwordRules"
                    v-bind:type="password"
                    required>
                </v-text-field>
            </v-flex>
            <v-flex>
                <v-btn>Cancel</v-btn>
                <v-btn>Login</v-btn>
            </v-flex>
        </v-layout>
    </v-cotainer>
</template>

<script>
export default {

}
</script>

<style>

</style>
