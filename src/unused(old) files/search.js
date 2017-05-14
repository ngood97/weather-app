import React, { Component } from 'react';
import $ from 'jquery';
import './search.css';

class Search extends Component{
    constructor(){
        super();
        this.state = {
            weatherType: "",
            location: "",
            validCity: "no City entered",
            lastSearches: [],
        };
    }
    validateCity(city){
        let that = this;

        $.getJSON("https://www.metaweather.com/api/location/search/?query=" + city, function(result){
            if(result[0]){
                that.setState({validCity: result[0].title});
                $.getJSON("https://www.metaweather.com/api/location/" + result[0].woeid, function(weatherInfo){
                  that.setState({weatherType: weatherInfo.consolidated_weather[0].weather_state_abbr,});
                   document.getElementById("city_weather_name").innerHTML = that.state.validCity + ': ' + weatherInfo.consolidated_weather[0].weather_state_name;
                   document.getElementById("weather").innerHTML = '<img src="https://www.metaweather.com/static/img/weather/' + that.state.weatherType + '.svg" /> ';
                }); 
            }
            else{
                that.setState({validCity: "not valid"});
                document.getElementById("city_weather_name").innerHTML = "Not valid city";
                document.getElementById("weather").innerHTML = "";
            }
        });
        let seen = -1;
        for(let i = 0; i<this.state.lastSearches.length && i<5; i++){
            if (city === this.state.lastSearches[i]){
                seen = i;
            }
        }
        if(this.state.lastSearches){
            if(seen===-1){
                if(this.state.lastSearches.length<5){
                    this.setState({
                        lastSearches:this.state.lastSearches.concat(city),
                    });
                }
                else{
                    this.setState({
                        lastSearches:this.state.lastSearches.slice(1,6).concat(city),
                    })
                }
            }
            else{
                this.setState({
                    lastSearches:this.state.lastSearches.slice(0,seen).concat(that.state.lastSearches.slice(seen+1,that.state.lastSearches.length)).concat(city),
                });
            }
        }
        else{
            this.setState({
                lastSearches: [city],
            });
        }
    }
    render() {
    let clickableSearches;
    let that = this;
    if(this.state.lastSearches){
        clickableSearches = this.state.lastSearches.map(function(i){
            return(
                 <li key = {i}>
                    <a href="#" onClick={()=>that.validateCity(i)}>{i}</a>
                </li>
            )  
        });
    }
    return (
        <div className = "search">
            <form > 
            <input type="text" id='city' placeholder="enter a city"/><br/>
            </form>
            <button type="button" onClick={i => this.validateCity(document.getElementById('city').value)}>Find weather</button> 
            <ol>{clickableSearches}</ol>
            <div id="city_weather_name"></div>
            <div class="weatherType-wrapper">
                <div id="weather" className = "weatherType">
                </div>
            </div>
        </div>
    );
    document.getElementById('test').innerHTML = "Currently in function: render";
  }
}

export default Search;