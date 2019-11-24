<template>
<v-data-table :headers="headers" :items="students" sort-by="fullname" class="elevation-1">
    <template v-slot:top>
        <v-toolbar flat color="white">
            <v-toolbar-title>Student 2022</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
                <AddStudent/>
        </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
            edit
        </v-icon>
        <v-icon small @click="deleteItem(item)">
            delete
        </v-icon>
    </template>
</v-data-table>
</template>

<script>
import AddStudent from '@/components/AddStudent.vue'
// import Students from '@/components/Students.vue'
import {
    getStudents
} from '@/store/axios'

export default {
    components: {
        AddStudent,

    },
    data() {
        return {
            search: '',
            students: [],
            dialog: false,
            headers: [{
                    text: 'Full Name',
                    align: 'left',
                    sortable: false,
                    value: 'fullname',
                },
                {
                    text: 'Batch',
                    value: 'batch'
                },
                {
                    text: 'Username',
                    value: 'username'
                },
                {
                    text: 'Email',
                    value: 'email'
                },
                {
                    text: 'Password',
                    value: 'password'
                },
                {
                    text: 'Actions',
                    value: 'action',
                    sortable: false
                },
            ],
            editedIndex: -1,
            editedItem: {
                fullname: '',
                batch: '',
                username: '',
                email: '',
                password: '',
            },
            defaultItem: {
                fullname: '',
                batch: '',
                username: '',
                email: '',
                password: '',
            },
        }
    },

    methods: {
        // deleteStudent(id) {
        //     let students = this.students.filter(student => student._id != id)
        //     this.student = students
        // },
        // updateNote(student) {
        //     this.deleteStudent(student._id);
        //     this.createStudent(student);
        // },
        // createNote(student) {
        //     this.students = [student, ...this.students];
        // },
        // editItem(item) {
        //     this.editedIndex = this.desserts.indexOf(item)
        //     this.editedItem = Object.assign({}, item)
        //     this.dialog = true
        // },

        // deleteItem(item) {
        //     const index = this.desserts.indexOf(item)
        //     confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        // },

        // close() {
        //     this.dialog = false
        //     setTimeout(() => {
        //         this.editedItem = Object.assign({}, this.defaultItem)
        //         this.editedIndex = -1
        //     }, 300)
        // },
        // save() {
        //     if (this.editedIndex > -1) {
        //         Object.assign(this.desserts[this.editedIndex], this.editedItem)
        //     } else {
        //         this.desserts.push(this.editedItem)
        //     }
        //     this.close()
        // },
    },
    mounted() {
        getStudents()
            .then(data => this.students = data.data)
            .catch((err => alert(err)));
    }

}
</script>

<style>

</style>
