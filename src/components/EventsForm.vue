<template>
<center>
    <v-card max-width="500">
        <v-container>
            <h1>Add New Event</h1>
            <v-form @submit.prevent="submit" enctype="multipart/form-data">
                <v-img :src="imagePreview" v-show="showImage"></v-img>
                <v-text-field label="Name of Event" auto-grow outlined v-model="event"></v-text-field>
                <v-text-field label="Address" auto-grow outlined v-model="address"></v-text-field>
                <v-menu v-model="menu1" :close-on-content-click="false" max-width="290">
                    <template v-slot:activator="{ on }">
                        <v-text-field  :value="computedDateFormattedMomentjs" clearable label="Date of Event" readonly v-on="on" @click:clear="date = null" auto-grow outlined></v-text-field>
                    </template>
                    <v-date-picker v-model="date" @change="menu1 = false"></v-date-picker>
                </v-menu>
                <v-file-input refs="file" id="file" label="File input" accept="image/*" prepend-inner-icon="mdi-camera" @change="handleFileUpload" auto-grow outlined></v-file-input>
                <v-textarea outlined name="input-7-4" label="Description of Event"></v-textarea>
            </v-form>
            <v-divider />
            <v-btn>clear</v-btn>
            <v-btn class="mr-4">submit</v-btn>
        </v-container>
    </v-card>
</center>
</template>

<script>
import moment from 'moment'
import axios from 'axios'
export default {
    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        menu1: false,
        file: '',
        event: '',
        description:'',
        address:'',
        showImage: false,
        imagePreview: ''
    }),

    computed: {
        computedDateFormattedMomentjs() {
            return this.date ? moment(this.date).format('dddd, MMMM Do YYYY') : ''
        },
    },
    methods: {
        handleFileUpload() {
            const file = this.$refs.file.files[0]
            this.file = file
        },
        
        async submit(){
              let data = {
                title: this.event,
                address: this.address,
                description:this.address,
                date:this.date, 
                file: this.file
            }

            let formData = new FormData()
            formData.append('file', data )
            try{
            await axios.post('/event/create', formData);
            }
            catch(err){
                window.console.log(err)
            }
        }
         
    }
}
</script>
