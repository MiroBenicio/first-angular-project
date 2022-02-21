import { Component } from '@angular/core'

@Component({
    selector: 'header-app',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    nomeMarca = 'SweetHeart';
    productName = 'Muffin';
    muffins = 10
    flavours = ['Chocolate', 'Banana', 'Strawberry', 'Blueberry']

    pedirMuffin() {
        if (this.muffins > 0) {
            this.muffins--;
        }
    }
}

