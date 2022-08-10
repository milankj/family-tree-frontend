import React from 'react'
export default function Upcoming(props) {
    console.log('upcoming: ' + props.dateofDeath)
    // {dateofBirth,dateofDeath,dateofMarriage,fullName}
    const d = new Date()
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = d.getMonth()
    let currentdate = d.getDate()
    const recentBirth = () => {
        let inputMonth = props.dateofBirth.replace(/[^a-zA-Z]/g, "")
        let inputDate = parseInt(props.dateofBirth.slice(-2))
        console.log(props.dateofBirth.slice(-2))
        const textColor = {color : currentdate <= inputDate ? currentdate === inputDate ? "red" : "DodgerBlue" : "#918E9B"}
        console.log('Color: ',textColor)
        if (inputMonth != 'N/A') {
            if (inputMonth === monthList[month]) {
                return (
                    <div className='single-news' style={textColor}>{props.fullName} birthday on {props.dateofBirth.slice(-2)}</div>
                )
            }
            return null
        }
    }
    const recentDeath = () => {
        let inputDate = parseInt(props.dateofDeath.slice(-2))
        console.log(props.dateofDeath.slice(-2))
        const textColor = {color : currentdate <= inputDate ? currentdate === inputDate ? "red" : "DodgerBlue" : "#918E9B"}
        let inputMonth = props.dateofDeath.replace(/[^a-zA-Z]/g, "")
        if (inputMonth != 'N/A') {
            if (inputMonth === monthList[month]) {
                return (
                    <div className='single-news' style={textColor}>{props.fullName} death aniversary on {props.dateofDeath.slice(-2)}</div>
                )
            }
            return null
        }
        return null
    }
    const recentMarriage = () => {
        let inputDate = parseInt(props.dateofMarriage.slice(-2))
        console.log(props.dateofMarriage.slice(-2))
        const textColor = {color : currentdate <= inputDate ? currentdate === inputDate ? "red" : "DodgerBlue" : "#918E9B"}
        let inputMonth = props.dateofMarriage.replace(/[^a-zA-Z]/g, "")
        if (inputMonth != 'N/A') {
            if (inputMonth === monthList[month]) {
                return (
                    <div className='single-news' style={textColor}>{props.fullName} Marriage aniversary on {props.dateofMarriage.slice(-2)}</div>
                )
            }
            return null
        }
        return null
    }
    return (
        <div >
            {recentBirth()}
            {recentDeath()}
            {recentMarriage()}
        </div>
    )
}