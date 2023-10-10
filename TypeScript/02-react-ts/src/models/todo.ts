class Todo {
    id: string;
    text: string; 

    constructor(todoText: string) {
        //establishes the text value
        this.text = todoText;
        //autocreates the id based on the date
        this.id =  Math.random().toString(36).slice(-6);
    }
}

export default Todo;