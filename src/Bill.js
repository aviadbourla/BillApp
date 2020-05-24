
import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import './form.css'

class Bill extends Component {

    constructor(props) {
        super(props)
        this.state = { tip: 0, total: undefined, drinksSum: 0, foodSum: 0, foodAndDrinkSum: 0, drinksBill: 0, foodsBill: 0, pepoleDrink: 0, pepoleEat: 0, pepoleDrinkAndEat: 0 };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeBill = this.handleChangeBill.bind(this);
        this.handleChangeDrinksBill = this.handleChangeDrinksBill.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handlePeopleEat = this.handlePeopleEat.bind(this);
        this.handlePeopleDrink = this.handlePeopleDrink.bind(this);
        this.handlePeopleDrinkAndEat = this.handlePeopleDrinkAndEat.bind(this);
    }
    handleChange(event) {
        console.log(event.target.value)
        this.setState({ tip: event.target.value })
    }
    handleChangeBill(event) {
        console.log(event.target.value)
        const food = Number(event.target.value)
        this.setState({ foodsBill: food })
    }
    handleChangeDrinksBill(event) {
        console.log(event.target.value)
        const drink = Number(event.target.value)
        this.setState({ drinksBill: drink })
    }
    handlePeopleEat(event) {
        const eatnumbers = Number(event.target.value);
        this.setState({ pepoleEat: eatnumbers })
    }
    handlePeopleDrink(event) {
        const drinkersnumbers = Number(event.target.value);
        this.setState({ pepoleDrink: drinkersnumbers })
    }
    handlePeopleDrinkAndEat(event) {
        this.setState({ pepoleDrinKAndEat: event.target.value })
    }
    handleOnClick(event) {
        const sum = (+this.state.drinksBill + +this.state.foodsBill) + (+this.state.tip * (+this.state.drinksBill + +this.state.foodsBill))
        const drinksSum = (this.state.drinksBill + (this.state.tip * this.state.drinksBill)) / ((+this.state.pepoleDrink) + (+this.state.pepoleDrinkAndEat))
        const sumFood = (this.state.foodsBill + (this.state.tip * this.state.foodsBill)) / ((+this.state.pepoleEat) + (+this.state.pepoleDrinkAndEat))
        const sumDrinkAndEat = drinksSum + sumFood
        this.setState({ total: sum, foodSum: sumFood, drinksSum: drinksSum, foodAndDrinkSum: sumDrinkAndEat })
    }
    render() {
        return (
            <div className="container">
                <div className="heading">
                    <h1>Pay-the-bill</h1>
                    <h2>The Parsim Way</h2>
                </div>
                <div className="form">
                    <input className="inputsss" type="number" id="standard-basic" label="foodsBill" placeholder="Enter Foods bill" onChange={this.handleChangeBill} />
                    <input type="number" id="standard-basic" label="drinksBill" placeholder="Enter Drinks bill" onChange={this.handleChangeDrinksBill} />
                    <input type="number" id="standard-basic" label="pepoleEat" placeholder="How many people ordered food" onChange={this.handlePeopleEat} />
                    <input type="number" id="standard-basic" label="pepoleDrink" placeholder="How many pepole ordered drinks" onChange={this.handlePeopleDrink} />
                    <input type="number" id="standard-basic" label="pepoleDrinkAndEat" placeholder="How many pepole ordered both" onChange={this.handlePeopleDrinkAndEat} />
                </div>
                <FormControl variant="outlined" >
                    <InputLabel id="demo-simple-select-outlined-label">tip</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={this.state.tip}
                        onChange={this.handleChange}
                        label="tip"
                    >
                        <MenuItem value={0.1} > 10%</MenuItem>
                        <MenuItem value={0.12}> 12%</MenuItem>
                        <MenuItem value={0.15}> 15%</MenuItem>
                        <MenuItem value={0.2}>  20%</MenuItem>
                    </Select>
                </FormControl>
                <div>
                    <Button variant="contained"  onClick={this.handleOnClick}> Calculate </Button>
                    {this.state.total ? <p>  Total bill: {this.state.total} </p> : <p></p>}
                    {this.state.foodSum ? <p> Each person who eat needs to pay : {Math.round(this.state.foodSum)} </p> : null}
                    {this.state.drinksSum ? <p> Each person who drink needs to pay : {Math.round(this.state.drinksSum)} </p> : null}
                    {this.state.foodAndDrinkSum ? <p> Each person who drink and eat needs to pay : {Math.round(this.state.foodAndDrinkSum)} </p> : null}
                </div>
            </div>
        )
    }
}

export default Bill;