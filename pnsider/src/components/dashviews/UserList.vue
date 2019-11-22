<template>
<v-btn class="primary">Create</v-btn>
    <v-row no-gutters>
        <v-col v-for="n in 3" :key="n" cols="sm">
            <v-card class="pa-2" outlined tile>
                col
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>
