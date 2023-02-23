class Person {
    name;
    age;
    mobile;
    constructor(name, age, mobile) {
      this.name = name;
      this.age = age;
      this.mobile = mobile;
    }
  }
  class Student extends Person {
    id;
    constructor(name, age, mobile, id) {
      super(name, age, mobile, id);
      this.id = id;
    }
    display()
    {
      console.log(`${this.name}, ${this.age}, ${this.mobile}, ${this.id}`);
    }
  }
  
  
  const s1=new Student("abc",17,963852741,1);
  const s2=new Student("abcd",18,963852741,2);
  const s3=new Student("ab",19,963852741,3);
  const s4=new Student("abce",15,963852741,4);
  const s5=new Student("abd",16,963852741,5);
  
  
  // document.getElementById("myBtn").addEventListener("click", function(){s1.display(),s2.display(),s3.display(),s4.display(),s5.display()});
  
  document.getElementById("demos").innerHTML = `${s1.name}, ${s1.age}, ${s1.mobile}, ${s1.id}`;
  document.getElementById("demos1").innerHTML = `${s2.name}, ${s2.age}, ${s2.mobile}, ${s2.id}`;
  document.getElementById("demos2").innerHTML = `${s3.name}, ${s3.age}, ${s3.mobile}, ${s3.id}`;
  document.getElementById("demos3").innerHTML = `${s4.name}, ${s4.age}, ${s4.mobile}, ${s4.id}`;
  document.getElementById("demos4").innerHTML = `${s5.name}, ${s5.age}, ${s5.mobile}, ${s5.id}`;
  