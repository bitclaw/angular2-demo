import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <div [style.color] = 'mycolor'>{{name}}</div>
        <button (click) = "changeColor()">Change color</button>
    `
})
export class AppComponent {

    // [] means property binding - Component to DOM
    // () means event binding - DOM to Component

    title = 'Customer App';
    name = 'Daniel';
    mycolor = 'blue';


    changeColor() {
        this.mycolor = this.mycolor === 'blue' ? this.mycolor = 'red' : this.mycolor = 'blue';
    }

}
