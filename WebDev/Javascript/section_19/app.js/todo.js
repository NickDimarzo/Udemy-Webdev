// Note: very simple todo list, can add many checks for user errors

let input = prompt("what would you like todo?");

const todos = ['Collect Money', 'Do dishes'];

while( input !== 'quit' && input !== 'q'){

    if (input === 'list'){
        console.log('*************')  
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*************')
    }

    else if(input === 'new'){
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    }

    else if (input === 'delete'){
        const index = parseInt(prompt('Ok,  what is the index you wish to delete?'));
        if (!Number.isNaN(index)){
            const deleted = todos.splice(index, 1);
            console.log(`Ok deleted ${deleted[0]}`);
        }
        else{
            console.log('Invalid Index!!')
        }
    }
    
    input = prompt('what would you like todo?')  
}

console.log('OK QUIT THE APP!')