class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get birthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;
    }
}
class Student extends Person {
        static MIN_GRADE_FOR_SCHOLARSHIP  = 4;

        constructor(firstName, lastName, age, group, grade) {
            super(firstName, lastName, age); // call the parent class constructor
            this.group = group;
            this.grade = grade;
        }

        isEligibleForScholarship() {
            return this.grade >= Student.MIN_GRADE_FOR_SCHOLARSHIP;
        }
    }
    class Teacher extends Person {
        constructor (firstName, lastName, age, groups, experience) {
            super(firstName, lastName, age) // call the parent class constructor
            this.groups = groups;
            this.experience = experience;
        }
        isGroupTeacher(group) {
            return this.groups.includes(group);
        }
    }

const teacher1 = new Teacher('Brad', 'Pitt', 59, ['50b', '51c'], 41); 
const student1 = new Student('Tom', 'Cruise', 60, '50b', 4.9); 
const student2 = new Student('Leonardo', 'DiCaprio', 49, '62c', 3.9); 

console.log(student1.fullName); // Tom Cruise 
console.log(student2.birthYear); // 1975 
console.log(student1.isEligibleForScholarship()); // true 
console.log(student2.isEligibleForScholarship()); // false 
console.log(teacher1.isGroupTeacher(student1.group)); // true 
console.log(teacher1.isGroupTeacher(student2.group)); // false 
console.log(Student.MIN_GRADE_FOR_SCHOLARSHIP); // 4 
