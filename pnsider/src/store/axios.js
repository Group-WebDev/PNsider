import axios from 'axios';
const BASE_URL = 'http://localhost:3000';

export function getStudents() {
        return axios.get(`${BASE_URL}/api/student/list`)
                .then(response => response.data);
}
export function deleteStudent(id){
        return axios.post(`${BASE_URL}/api/student/delete/${id}`)
                .then(response => response.data)
                .catch(err => Promise.reject(err.message));
}
export function createStudent(data) {
        return axios.post(`${BASE_URL}/api/student/create`, 
        { fullname: data.fullname, batch: data.batch, username:data.username, email:data.email, password:data.password}
        )      .then(response => {
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}
export function updateStudent(data, id) {
        return axios.post(`${BASE_URL}/api/student/update/${id}`, { data })
                .then(response => {
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}