function findStudentIndex(students, searchStudent) {
    let left = 0;
    let right = students.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let student = students[mid];
        if (student === searchStudent) {
            return mid; 
        } else if (student < searchStudent) {
            left = mid + 1; 
		} else {
            right = mid - 1;
        }
    }
    return -1; 
}

let students = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"];

console.log(findStudentIndex(students, "John")); 
console.log(findStudentIndex(students, "andrew")); 

// ตอบคำถามตรงนี้จ้า
// Binary Search  Big O = O (Logn) TCต่ำ เพราะจะแบ่งครึ่งในการหา