import NissanLogo from '../nissanlogo.png';
import GetReady from '../getready.png';
import { useEffect } from "react"
import { useState } from "react"
import firebase from '../../firbase'
import "react-datepicker/dist/react-datepicker.css"
import {useLocation} from 'react-router-dom';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';




const TimeSlot = () => {

    const { id } = useParams();
    const location = useLocation();
    const [count,setCount] = useState(0);

function getSlots(){
    const Location = firebase.firestore().collection("Cars").doc(`${location.state.car}`);
    const Cars = Location.collection('models').doc(`${id}`).collection('timeslot').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            Location.collection('models').doc(`${id}`).collection('timeslot').doc(`${doc.id}`).get().then((doc2)=>{
                console.log(doc2.data())
                console.log(doc.id)

                var data = doc2.data()

                if(doc.id === 'timeslot10_11'){
                    let row  = `<tr style="text-align:center;">
                    <td>10 AM - 11 AM</td>
                    <td>${data.available}</td>
                    </tr>`;
                    let table = document.getElementById('table')
                    table.innerHTML += row
                }

                if(doc.id === 'timeslot11_12'){
                    let row  = `<tr style="text-align:center;">
                    <td>11 AM - 12 AM</td>
                    <td>${data.available}</td>
                    </tr>`;
                    let table = document.getElementById('table')
                    table.innerHTML += row
                }

                if(doc.id === 'timeslot12_13'){
                    let row  = `<tr style="text-align:center;">
                    <td>12 PM - 1 PM</td>
                    <td>${data.available}</td>
                    </tr>`;
                    let table = document.getElementById('table')
                    table.innerHTML += row
                }

                if(doc.id === 'timeslot13_14'){
                    let row  = `<tr style="text-align:center;">
                    <td>1 PM - 2 PM</td>
                    <td>${data.available}</td>
                    </tr>`;
                    let table = document.getElementById('table')
                    table.innerHTML += row
                }

                if(doc.id === 'timeslot14_15'){
                    let row  = `<tr style="text-align:center;">
                    <td>2 PM - 3 PM</td>
                    <td>${data.available}</td>
                    </tr>`;
                    let table = document.getElementById('table')
                    table.innerHTML += row
                }

                if(doc.id === 'timeslot15_16'){
                    let row  = `<tr style="text-align:center;">
                    <td>3 PM - 4 PM</td>
                    <td>${data.available}</td>
                    </tr>`;
                    let table = document.getElementById('table')
                    table.innerHTML += row
                }

                if(doc.id === 'timeslot16_17'){
                    let row  = `<tr style="text-align:center;">
                    <td>4 PM - 5 PM</td>
                    <td>${data.available}</td>
                    </tr>`;
                    let table = document.getElementById('table')
                    table.innerHTML += row
                }

                if(doc.id === 'timeslot17_18'){
                    let row  = `<tr style="text-align:center;">
                    <td>5 PM - 6 PM</td>
                    <td>${data.available}</td>
                    </tr>`;
                    let table = document.getElementById('table')
                    table.innerHTML += row
                }


                // if(doc2.data().available<=0){
                //     document.getElementById(`${doc.id}`).disabled = true;
                //     document.getElementById(`${doc.id}`).style.display = "none";
                //     // document.getElementById(`${doc.id}`).remove();
                //     setCcount(ccount+1)
                // }
            })
        });
    })
}

useEffect(()=>{
    if(count === 0)
    getSlots();

    setCount(count+1);
},[])
    
    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

            <div style={{textAlign: 'center'}}>
                <h1 style={{fontSize: '30px', color: 'black', marginTop: '15px', }}>Admin Panel</h1>
                <h1 style={{fontSize: '20px', color: 'black', marginBottom: '20px'}}>Company & Model Name</h1>
            </div>

            <div style={{borderRadius: '20px'}}>
                <table style={{color: 'black',borderRadius: '5px', border: '2px solid black', width: '80vw', height: '75vh', borderRadius: '20px', padding: '20px'}}>
                    <thead>
                        <tr style={{textAlign: 'center', marginTop: '30px'}}>
                            <td>Time Slot</td>
                            <td>Slots Available</td>
                            {/* <td>Slots Booked</td> */}
                        </tr>
                    </thead>
                    
                    <tbody id='table'>

                        {/* <tr style={{textAlign: 'center'}}>
                            <td>10 AM - 11 PM</td>                    
                            <td>6</td>       
                            <td>3</td>
                        </tr>

                        <tr style={{textAlign: 'center'}}>
                            <td>11 AM - 12 PM</td>                    
                            <td>6</td>       
                            <td>3</td>
                        </tr>

                        <tr style={{textAlign: 'center'}}>
                            <td>12 PM - 1 PM</td>                    
                            <td>6</td>       
                            <td>3</td>
                        </tr>

                        <tr style={{textAlign: 'center'}}>
                            <td>1 PM - 2 PM</td>                    
                            <td>6</td>       
                            <td>3</td>
                        </tr>

                        <tr style={{textAlign: 'center'}}>
                            <td>2 PM - 3 PM</td>                    
                            <td>6</td>       
                            <td>3</td>
                        </tr>

                        <tr style={{textAlign: 'center'}}>
                            <td>3 PM - 4 PM</td>                    
                            <td>6</td>       
                            <td>3</td>
                        </tr>

                        <tr style={{textAlign: 'center'}}>
                            <td>4 PM - 5 PM</td>                    
                            <td>6</td>       
                            <td>3</td>
                        </tr> */}
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default TimeSlot