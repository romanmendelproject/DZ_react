import * as axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://127.0.0.1:8000/coursesapi/',
}
);


export const coursesAPI = {
    getCourses() {
        return instance.
        get(`api/course/`)
            .then(response => {
                return response.data;
            });
    },
    getOneCourse(id) {
        return instance.
        get(`api/course/` + id + '/')
            .then(response => {
                return response.data;
            });
    },
    getStudentData(id) {
        return instance.
        get(`api/student/` + id + '/')
            .then(response => {
                return response.data;
            });
    },
    setStudentData(id, course) {
        return instance.put(`api/student/` + id + '/', {course});
    },
}

export const authAPI = {
    me() {
        return instance.get(`user/cur`);
    },
    login(username, password) {
        return instance.post(`user/login`, { username, password});
    },
    logout() {
        return instance.get(`user/logout`);
    }
}


