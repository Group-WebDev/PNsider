<template>
<div>
    <AddStudent /><br />
    <v-row no-gutters>
        <v-col v-for="columns in columnData" :key="columns.column" cols="sm">
            <v-card class="pa-2" tile>
                {{columns.column}}
            </v-card>
        </v-col>
    </v-row>
    <v-row no-gutters>
        <Students v-for="(student, index) in students" :student="student" :key="index" @deleteStudent="deleteStudent" @updateStudent="updateStudent">
        </Students>
    </v-row>
</div>
</template>

<script>
import AddStudent from '@/components/AddStudent.vue'
import Students from '@/components/Students.vue'
import { getStudents }  from '@/store/axios'

export default {
    components: {
        AddStudent,
        Students

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
            ],
            students: [],
        }
    },
    methods: {
        deleteStudent(id) {
            let students = this.students.filter(student => student._id != id)
            this.student = students
        },
        updateNote(student) {
            this.deleteStudent(student._id);
            this.createStudent(student);
        },
        createNote(student) {
            this.students = [student, ...this.students];
        },
    },
    mounted() {
        getStudents()
            .then(data => this.students = data.students)
            .catch((err => alert(err)));
    }

}
</script>

<style>

</style>
