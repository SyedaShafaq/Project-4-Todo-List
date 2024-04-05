#! /usr/bin/env node
//import inquirer
import inquirer from "inquirer";

//Make an array & save todo's in it
let todoList: string[] = [];

//Print a message to welcome users
console.log(`\n \t Welcome-Todo List Application \t \n`);

//Create a function to choose an operation
let condition = true;
async function todos(todoList: string[]) {
  while (condition) {
    let ansTodo = await inquirer.prompt([
      {
        type: `list`,
        name: `todo`,
        message: `******Choose an operation******`,
        choices: [`Add`, `Update`, `View`, `Delete`,`Exit`],
      },
    ]);
    //Use if statement to add todos in list
    if (ansTodo.todo === `Add`) {
      let addtodo = await inquirer.prompt([
        {
          type: `input`,
          name: `operation1`,
          message: `Add items in todo list`,
        },
      ]);
      todoList.push(addtodo.operation1);
      console.log(todoList);
    }
    //Use if statement to update todos in list
    if (ansTodo.todo === `Update`) {
      let updateTodo = await inquirer.prompt([
        {
          name: `operation1`,
          type: `list`,
          message: `Update items in todo list`,
          choices: todoList.map((item) => item),
        },
      ]);
      let addtodo = await inquirer.prompt([
        {
          type: `input`,
          name: `operation1`,
          message: `Add items in todos list`,
        },
      ]);
      let newTodo = todoList.filter((val) => val !== updateTodo.operation1);
      todoList = [...newTodo, addtodo.operation1];
      console.log(todoList);
    }
    //Use if statement to view todos in list
    if (ansTodo.todo === `View`) {
      console.log(`\n \t***>>>>>*** My Todo's List ***<<<<<***\t \n`);
      console.log(todoList);
    }
    if (ansTodo.todo === `Delete`) {
      let deleteTodo = await inquirer.prompt([
        {
          type: `list`,
          name: `operation1`,
          message: `Delete items in todo list`,
          choices: todoList.map((item) => item),
        },
      ]);
      let newTodo = todoList.filter((val) => val !== deleteTodo.operation1);
      todoList = [...newTodo];
      console.log(todoList);
    }
    else if (ansTodo.todo === `Exit`){
      console.log(`\n \t ***Exit*** \t \n`);
      
      process.exit(0);
    }
  }
}

todos(todoList);
