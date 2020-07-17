import React from 'react';
import Cards from './component/Cards';



export default class extends React.Component{
    state = {
        products:getProducts()
    }

    incProd = (id) => {
        const arr = [...this.state.products];
        let index = arr.findIndex(p => p.id === id);
        if(index >= 0){
            const product = {...arr[index]};
            product.count++;
            arr[index] = product;
            this.setState({...this.state, products: arr});
        }
    }

    decProd = (id) => {
        const arr = [...this.state.products];
        let index = arr.findIndex(p => p.id === id);
        if(index >= 0){
            const product = {...arr[index]};
            product.count--;
            arr[index] = product;
            this.setState({...this.state, products: arr});
        }
    }

    render(){
        return (
            <div className='container'>
                <h1>Our Products</h1>
                <hr/>
                <Cards 
                products={this.state.products} 
                onDecClickHandler={this.decProd}
                onIncClickHandler={this.incProd}/>
                <hr />
                <button onClick={() => console.log(this.state.products)}>Send order</button>
            </div>
        );
    }
}

function getProducts(){
    return [
        {id:'123',title:'Product 1', price:100,count:2},
        {id:'321',title:'Product 2', price:50,count:4},
        {id:'456',title:'Product 3', price:120,count:1},
    ];
}

