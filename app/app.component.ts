import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
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
