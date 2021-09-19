const users = [
    {
      name: 'Brook',
      scores: 75,
      skills: ['HTM', 'CSS', 'JS'],
      age: 16
    },
    {
      name: 'Alex',
      scores: 80,
      skills: ['HTM', 'CSS', 'JS'],
      age: 18
    },
    {
      name: 'David',
      scores: 75,
      skills: ['HTM', 'CSS'],
      age: 22
    },
    {
      name: 'John',
      scores: 85,
      skills: ['HTM'],
      age: 25
    },
    {
      name: 'Sara',
      scores: 95,
      skills: ['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name: 'Martha',
      scores: 80,
      skills: ['HTM', 'CSS', 'JS'],
      age: 18
    },
    {
      name: 'Thomas',
      scores: 90,
      skills: ['HTM', 'CSS', 'JS'],
      age: 20
    }
  ];
  
  
  
  
  
  // Write a function which filter users who has scoresGreaterThan85
  
  console.log("\n\n ---------------> Users Who Has Scores Greater Than 85 <---------------\n")
  const scoresGreaterThan85 = arr => {
    const scores = [];
    for (const element of arr) {
      if (element.scores > 85) {
        scores.push(element.name, element.scores);
  
      }
    }
    return scores;
  };
  console.log(scoresGreaterThan85(users));
  
  
  
  
  // Write a function which addUser to the user array only if the user does not exist.
  
  
  console.log("\n\n ---------------> New User Added Shaik <---------------\n")
  const newUser = {
    name: 'shaik',
    scores: 800,
    skills: ['HTML', 'CSS', 'JS'],
    age: 23
  };
  const addUser = (arr, newUser) => {
    for (const user of arr) {
      if (user['name'] === newUser.name) {
        return ' A user does exist';
      }
    }
    arr.push(newUser);
    return newUser;
  };
  console.log(addUser(users, newUser));
  
  
  // Write a function which addUserSkill which can add skill to a user only if the user exist.
  
  console.log("\n\n ---------------> Added new skills to user ALEX <---------------\n")
  function addUserSkill(users,newSkill){
    let count = 0;
    for(let per of users){
        if(per.name == newSkill.name){
            count = 1;
            for(let sub of newSkill.skills){
                per.skills.push(sub)
            }  
        }
    }
    if(count == 0){
        return "User doesnot exists"
    }
    return users
    
  }
  const newSkill = {
    name:'Alex', 
    scores:80,
    skills:['node'],
    age:18
  }
  console.log(addUserSkill(users,newSkill))
  
  
  // Write a function which editUser if the user exist in the users array.
  
  
  console.log("\n\n ---------------> Edited User BROOK To SHAIK <---------------\n")
  const editUser = (arr, name, newUser) => {
    let found = false;
    for (const user of arr) {
      if (user['name'] === name) {
        user.name = newUser.name;
        user.scores = newUser.scores;
        user.skills = newUser.skills;
        user.age = newUser.age;
        found = true;
        break;
      } 
    }
    if(!found) {
        return 'A user does not exist';
      }
  
    return arr;
  };
  console.log(editUser(users, "Brook", newUser));
  
  