<template>
<div>
    <AddStudent />
    <v-row no-gutters>
        <v-col v-for="columns in columnData" :key="columns.column" cols="sm">
            <v-card class="pa-2" outlined tile>
                {{columns.column}}
            </v-card>
        </v-col>
    </v-row>
</div>
</template>

<script>
import AddStudent from '@/components/AddStudent.vue'

export default {
    components: {
        AddStudent
    },
    data() {
        return {
            columnData: [{
                    column: 'Full Name'
                },
                {
                    column: 'Batch'
                },
                {
                    column: 'Username'
                },
                {
                    column: 'Email'
                },
                {
                    column: 'Password'
                }
            ]
        }
    }

}
</script>

<style>

</style>
