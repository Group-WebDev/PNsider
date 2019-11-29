import axios from 'axios';
const BASE_URL = 'http://localhost:5000';

export function getStudents() {
        return axios.get(`${BASE_URL}/`)
                .then(response => response.data);
}
export function deleteStudent(id){
        return axios.post(`${BASE_URL}/student/delete/${id}`)
                .then(response => response.data)
                .catch(err => Promise.reject(err.message));
}
export function getUpdateStudent(id){
        return axios.get(`${BASE_URL}/student/update/${id}`)
        .then(response => response.data);          
}

export function createStudent(data) {
        return axios.post(`${BASE_URL}/student/create`, 
        { fullname: data.fullname, batch: data.batch, username:data.username, email:data.email, password:data.password}
        )      .then(response => {
                        alert(response)
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}
export function updateStudent(data, id) {
        window.console.log(id)
        return axios.put(`${BASE_URL}/student/update/${id}`, { data })
                .then(response => {
                        alert(response.data)
                        return response.data
                })
                .catch(err => Promise.reject(err.message));
}