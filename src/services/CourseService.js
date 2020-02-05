import {API_URL} from "../constants";

//create a new course instance and adds it to the collection of courses
export const createCourse = (course) =>
    fetch(API_URL, {
        method:'POST',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

// export const findAllCourses = () =>
//     fetch(API_URL)
//         .then(response => response.json())

//retrieves all course instances as an array of courses
export const findAllCourses = async () => {
    const response = await fetch(API_URL)
    return await response.json()
}

// retrieves a course instance that matches the id parameter
export const findCourseById = async (courseId) =>
{
    const response = await fetch(`${API_URL}/${courseId}`)
    return await response.json()
}


// updates the course instance whose id matches the id parameter. Updates the instance with values in course parameter
export const updateCourse = async (courseId, course) =>
    fetch(`${API_URL}/${courseId}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())



// deletes course instance whose id matches the id parameter
export const deleteCourse = async (courseId) =>
{
    const response = await fetch(`${API_URL}/${courseId}`, {
        method: 'DELETE'
    })
    return await response.json()
}