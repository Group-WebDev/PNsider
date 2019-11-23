<template>
<v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Add Account</v-btn>
        </template>
        <v-card>
            <v-container>
                <v-card-title>
                    <span class="headline">User Profile</span>
                </v-card-title>
                <v-form ref="form" v-model="valid" lazy-validation>

                    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

                    <v-text-field :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" :rules="paswordRules" :type="show2 ? 'text' : 'password'" name="input-10-2" label="Visible" hint="At least 8 characters" value="wqfasds" class="input-group--focused" @click:append="show2 = !show2"></v-text-field>

                    <v-card-actions>
                        <v-spacer/>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
                            Add Account
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-container>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
export default {
    data: () => ({
        dialog: false,
        show2: false,
        valid: true,
        name: '',
        paswordRules: [
            v => !!v || 'Password is required',
            v => /^([a-zA-Z0-9@*#]{8,15})$/.test(v) || 'Password matching expression. Match all alphanumeric character and predefined wild characters. Password must consists of at least 8 characters and not more than 15 characters.',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
    }),

    methods: {
        validate() {
            if (this.$refs.form.validate()) {
                this.snackbar = true
            }
        },
    },
}
</script>
