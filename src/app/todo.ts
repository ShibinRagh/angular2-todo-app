export class Todo {
    id: number;
    title: string = '';
    complete: boolean = false;
    
    constructor(values: object= {}){
        object.assign(this, values)
    }
    let todo = new Todo({
        title = 'Read articles',
        complete: false
    })
};

