/* write a function to calculate and print final grades */

// Write your function here:
const finalGrade = (grade1, grade2, grade3) => {
    let average = (grade1 + grade2 + grade3) / 3;
    if ((grade1 < 0 || grade1 > 100) || (grade2 < 0 || grade2 > 100) || (grade3 < 0 || grade3 > 100)) {
      return 'You have entered an invalid grade.'
    };
    if (average >= 0 && average <= 59) {
      return 'F';
    } else if (average >= 60 && average <= 69) {
      return 'D';
    } else if (average >= 70 && average <= 79) {
      return 'C';
    } else if (average >= 80 && average <= 89) {
      return 'B';
    } else {
      return 'A';
    };
  };
  
  
  
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(finalGrade(99, 92, 95))
  
  // We encourage you to add more function calls of your own to test your code!