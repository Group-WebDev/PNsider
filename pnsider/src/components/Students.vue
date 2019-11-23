<template>
    <v-row no-gutters>
        <v-col>
             <v-card class="pa-2" tile>
                 {{student.fullname}}
            </v-card>
        </v-col>
         <v-col>
             <v-card class="pa-2" tile>
                 {{student.batch}}
            </v-card>
        </v-col>
         <v-col>
             <v-card class="pa-2" tile>
                 {{student.username}}
            </v-card>
        </v-col>
         <v-col>
             <v-card class="pa-2" tile>
                 {{student.email}}
            </v-card>
        </v-col>
         <v-col>
             <v-card class="pa-2" tile>
                 {{student.password}}
            </v-card>
        </v-col>
    </v-row>
</template>
<script>
export default {
    props: [ 'student' ],
}
</script>

