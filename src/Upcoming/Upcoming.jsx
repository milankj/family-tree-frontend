import React from 'react'
export default function Upcoming(props) {
    console.log('upcoming: ' + props.dateofDeath)
    // {dateofBirth,dateofDeath,dateofMarriage,fullName}
    const d = new Date()
    const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let month = d.getMonth()
    console.log(monthList[month])

    const recentBirth = () => {
        let inputMonth = props.dateofBirth.replace(/[^a-zA-Z]/g, "")
        if (inputMonth != 'N/A') {
            if (inputMonth === monthList[month]) {
                return (
                    <div className='single-news'>{props.fullName} has birthday on {props.dateofBirth.slice(-2)}</div>
                )
            }
            return null
        }
    }
    const recentDeath = () => {
        let inputMonth = props.dateofDeath.replace(/[^a-zA-Z]/g, "")
        if (inputMonth != 'N/A') {
            if (inputMonth === monthList[month]) {
                return (
                    <div className='single-news'>{props.fullName} death aniversary on {props.dateofDeath.slice(-2)}</div>
                )
            }
            return null
        }
        return null
    }
    const recentMarriage = () => {
        let inputMonth = props.dateofMarriage.replace(/[^a-zA-Z]/g, "")
        if (inputMonth != 'N/A') {
            if (inputMonth === monthList[month]) {
                return (
                    <div className='single-news'>{props.fullName} Marriage aniversary on {props.dateofMarriage.slice(-2)}</div>
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