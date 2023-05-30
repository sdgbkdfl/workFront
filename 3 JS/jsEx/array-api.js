'use strict';
// Q1. make a string out of an array
// 배열을 문자열로 - join()
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('');
    console.log(result);
  }
  
  // Q2. make an array out of a string
  // 문자열을 배열로 - split()
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',', 2);
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
  }
  
  // Q4. make new array without the first two elements
  // slice - new array! End is exclusive
  // splice - 배열 자체를 변경
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result);

  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  // find - boolean type
  {
    const result = students.find((student)=>student.score === 90);{
      // console.log(student, index);
      console.log(result);
    };
  }
  
  // Q6. make an array of enrolled students
  // filter
  {
    const result = students.filter((student) => student.enrolled);
      console.log(result);
    
  }
  
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  // map
  {
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
  }
  
  // Q9. compute students' average score
  {
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
  }