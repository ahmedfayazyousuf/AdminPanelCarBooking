import NissanLogo from '../nissanlogo.png';
import Banner from './Banner.png';

import Altima from './NissanCars/Altima.png';
import Patrol from './NissanCars/Patrol.png';
import Pathfinder from './NissanCars/Pathfinder.png';
import NissanZ from './NissanCars/Nissan_Z_PT.png';
import Xtrail from './NissanCars/Xtrail.png';
import Nismo_370z from './NissanCars/370z-nismo.png';
import Maxima from './NissanCars/Maxima.png';
import Kicks from './NissanCars/Kicks.png';

import { useEffect } from "react"
import { useState } from "react"
import firebase from '../../firbase'
import { getStorage } from "firebase/storage";
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const UserNissan= () => {
    const [car, setCar] = useState('');
    const [user, setUser] = useState([])
    // eslint-disable-next-line
    const [file, setFile] = useState("");

    const [altima, setAltima] = useState(0);

    const [kicks, setKicks] = useState(0);

    const [pathfinder, setPathfinder] = useState(0);
    const [patrol, setPatrol] = useState(0);
    const [xtrail, setXtrail] = useState(0);
    const [z, setZ] = useState(0);
    const [nismoz, setNismoz] = useState(0);
    const [maxima, setMaxima] = useState(0);
    // eslint-disable-next-line
    const [userID, setUserID] = useState([])
    // eslint-disable-next-line
    const storage = getStorage();
    // eslint-disable-next-line
    var storagePath = 'uploads/' + file.name ;
    const location = useLocation();

var count = 0
    useEffect(() => {
        if(count === 0){
        const Location = firebase.firestore().collection("Cars").doc('Nissan');
        // eslint-disable-next-line
        const Cars = Location.collection('models').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            setUserID(current => [...current, doc.id]);
            setUser(current => [...current, doc.data()]);
        });
        count += 1;
        })}
        // eslint-disable-next-line
    count += 1;}
    , []);

    const getCars = async () =>{

        const Location = firebase.firestore().collection("Cars").doc('Nissan');
    // eslint-disable-next-line
     Location.collection('models').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        setUser(current => [...current, doc.data()]);
    });




    })

    // console.log(Cars)
    }
    // eslint-disable-next-line
    var count = 0;
    useEffect(()=>{

        if(count===0)
        getCars();

        count++;


        const Location = firebase.firestore().collection("Cars").doc('Nissan').collection('models').doc(`Altima`).collection('timeslot').get().then((docs)=>{
            var sum = 0;
            var count = 0;
            docs.forEach((doc,index)=>{
                count++;

                if(count === 9){
                    return;
                }
                console.log(doc.data().available)
              
                sum += doc.data().available;
            })
            console.log(sum);
            setAltima(sum)
        });

        const time = firebase.firestore().collection("Cars").doc('Nissan').collection('models')

        time.doc(`Kicks`).collection('timeslot').get().then((docs)=>{
            var sum = 0;
            var count = 0;
            docs.forEach((doc,index)=>{
                count++;

                if(count === 9){
                    return;
                }
                console.log(doc.data().available)
              
                sum += doc.data().available;
            })
            console.log(sum,kicks);
            setKicks(sum)
        });

        time.doc(`Maxima`).collection('timeslot').get().then((docs)=>{
            var sum = 0;
            var count = 0;
            docs.forEach((doc,index)=>{
                count++;

                if(count === 9){
                    return;
                }
                console.log(doc.data().available)
              
                sum += doc.data().available;
            })
            console.log(sum,kicks);
            setMaxima(sum)
        });

        time.doc(`Z`).collection('timeslot').get().then((docs)=>{
            var sum = 0;
            var count = 0;
            docs.forEach((doc,index)=>{
                count++;

                if(count === 9){
                    return;
                }
                console.log(doc.data().available)
              
                sum += doc.data().available;
            })
            console.log(sum,kicks);
            setZ(sum)
        });

        time.doc(`Nismo370z`).collection('timeslot').get().then((docs)=>{
            var sum = 0;
            var count = 0;
            docs.forEach((doc,index)=>{
                count++;

                if(count === 9){
                    return;
                }
                console.log(doc.data().available)
              
                sum += doc.data().available;
                
            })
            console.log(sum,kicks);
            setNismoz(sum)
        });

        time.doc(`Pathfinder`).collection('timeslot').get().then((docs)=>{
            var sum = 0;
            var count = 0;
            docs.forEach((doc,index)=>{
                count++;

                if(count === 9){
                    return;
                }
                console.log(doc.data().available)
              
                sum += doc.data().available;
            })
            console.log(sum,kicks);
            setPathfinder(sum)
        });

        time.doc(`Patrol`).collection('timeslot').get().then((docs)=>{
            var sum = 0;
            var count = 0;
            docs.forEach((doc,index)=>{
                count++;

                if(count === 9){
                    return;
                }
                console.log(doc.data().available)
              
                sum += doc.data().available;
            })
            console.log(sum,kicks);
            setPatrol(sum)
        });

        time.doc(`Xtrail`).collection('timeslot').get().then((docs)=>{
            var sum = 0;
            var count = 0;
            docs.forEach((doc,index)=>{
                count++;

                if(count === 9){
                    return;
                }
                console.log(doc.data().available)
              
                sum += doc.data().available;
            })
            console.log(sum,kicks);
            setXtrail(sum)
        });




        // eslint-disable-next-line
    },[])

    const navigate = useNavigate();

    function UserNav(v){
        navigate(v,{state:{uid:location.state.uid,car:"Nissan",count:location.state.count}});

    }

    function carClick(e){

        if(e === 'Altima'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('Patrol').style.background = "transparent";
            document.getElementById('Pathfinder').style.background = "transparent";
            document.getElementById('NissanZ').style.background = "transparent";
            document.getElementById('Xtrail').style.background = "transparent";
            document.getElementById('Nismo_370z').style.background = "transparent";
            document.getElementById('Maxima').style.background = "transparent";
            document.getElementById('Kicks').style.background = "transparent";
            setCar('/Altima');

        }

        if (e === 'Patrol'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('Altima').style.background = "transparent";
            document.getElementById('Pathfinder').style.background = "transparent";
            document.getElementById('NissanZ').style.background = "transparent";
            document.getElementById('Xtrail').style.background = "transparent";
            document.getElementById('Nismo_370z').style.background = "transparent";
            document.getElementById('Maxima').style.background = "transparent";
            document.getElementById('Kicks').style.background = "transparent";
            setCar('/Patrol');
        }

        if (e === 'Pathfinder'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('Altima').style.background = "transparent";
            document.getElementById('Patrol').style.background = "transparent";
            // document.getElementById('NissanZ').style.background = "transparent";
            document.getElementById('Xtrail').style.background = "transparent";
            document.getElementById('Nismo_370z').style.background = "transparent";
            document.getElementById('Maxima').style.background = "transparent";
            document.getElementById('Kicks').style.background = "transparent";
            setCar('/Pathfinder');
        }

        if (e === 'NissanZ'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('Altima').style.background = "transparent";
            document.getElementById('Patrol').style.background = "transparent";
            document.getElementById('Pathfinder').style.background = "transparent";
            document.getElementById('Xtrail').style.background = "transparent";
            document.getElementById('Nismo_370z').style.background = "transparent";
            document.getElementById('Maxima').style.background = "transparent";
            document.getElementById('Kicks').style.background = "transparent";
            setCar('/Z');
        }

        if (e === 'Xtrail'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('Altima').style.background = "transparent";
            document.getElementById('Patrol').style.background = "transparent";
            document.getElementById('Pathfinder').style.background = "transparent";
            document.getElementById('NissanZ').style.background = "transparent";
            document.getElementById('Nismo_370z').style.background = "transparent";
            document.getElementById('Maxima').style.background = "transparent";
            document.getElementById('Kicks').style.background = "transparent";
            setCar('/Xtrail');
        }

        if (e === 'Nismo_370z'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('Altima').style.background = "transparent";
            document.getElementById('Patrol').style.background = "transparent";
            document.getElementById('Pathfinder').style.background = "transparent";
            document.getElementById('NissanZ').style.background = "transparent";
            document.getElementById('Xtrail').style.background = "transparent";
            document.getElementById('Maxima').style.background = "transparent";
            document.getElementById('Kicks').style.background = "transparent";
            setCar('/Nismo370z');
        }

        if (e === 'Maxima'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('Altima').style.background = "transparent";
            document.getElementById('Patrol').style.background = "transparent";
            document.getElementById('Pathfinder').style.background = "transparent";
            document.getElementById('NissanZ').style.background = "transparent";
            document.getElementById('Xtrail').style.background = "transparent";
            document.getElementById('Nismo_370z').style.background = "transparent";
            document.getElementById('Kicks').style.background = "transparent";
            setCar('/Maxima');
        }

        if (e === 'Kicks'){
            document.getElementById(e).style.background = "rgb(200, 197, 197)";
            document.getElementById('Altima').style.background = "transparent";
            document.getElementById('Patrol').style.background = "transparent";
            document.getElementById('Pathfinder').style.background = "transparent";
            document.getElementById('NissanZ').style.background = "transparent";
            document.getElementById('Xtrail').style.background = "transparent";
            document.getElementById('Nismo_370z').style.background = "transparent";
            document.getElementById('Maxima').style.background = "transparent";
            setCar('/Kicks');
        }
        
    }

    function Handleclick(v){
        if(car === ''){
            return;
        }
        
    navigate('/User'+v, {state:{car:"Nissan"}});
    }
    
    return(

        <div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                <img src={NissanLogo} alt="Logo" style={{width: '20vh'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'5vh'}}>
                <img src={Banner} alt="Logo" style={{width: '40vh'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', marginTop:'40px', marginBottom:'15px', padding: '0'}} >
                <p>Please select a car</p>
            </div>  

            <div className='rower' style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0'}} >
    
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <div id='Altima' className="content content-1" onClick={()=>{carClick('Altima')}} style={{padding: '0', margin: '10px'}}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'right', paddingRight: '20px'}}>
                            <p style={{fontSize: '20px', fontWeight: '900'}}>{altima}</p>
                        </div>
                        <img src={Altima} alt="Logo" style={{width: '20vh'}}/>
                        <p style={{fontSize: '10px'}}>ALTIMA 2023</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                    <div id='Patrol' className="content content-1" onClick={()=>{carClick('Patrol')}} style={{padding: '0', margin: '10px'}}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'right', paddingRight: '20px'}}>
                            <p style={{fontSize: '20px', fontWeight: '900'}}>{patrol}</p>
                        </div>
                        <img src={Patrol} alt="Logo" style={{width: '20vh'}}/>  
                        <p style={{fontSize: '10px'}}>PATROL</p>
                    </div>
                </div>
            </div>
            
            <div className='rower' style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0'}} >
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                    <div id='Pathfinder' className="content content-1" onClick={()=>{carClick('Pathfinder')}} style={{padding: '0', margin: '10px'}}>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'right', paddingRight: '20px'}}>
                            <p style={{fontSize: '20px', fontWeight: '900'}}>{pathfinder}</p>
                        </div>
                        <img src={Pathfinder} alt="Logo" style={{width: '20vh'}}/>  
                        <p style={{fontSize: '10px'}}>PATHFINDER</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
                    <div id='NissanZ' className="content content-1" onClick={()=>{carClick('NissanZ')}} style={{padding: '0', margin: '10px'}}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'right', paddingRight: '20px'}}>
                            <p style={{fontSize: '20px', fontWeight: '900'}}>{z}</p>
                        </div>
                        <img src={NissanZ} alt="Logo" style={{width: '20vh'}}/>  
                        <p style={{fontSize: '10px'}}>NISSAN Z</p>
                    </div>
                </div>
                
            </div>

            <div className='rower' style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0'}} >
    
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end', padding: '0', margin: '0'}}>
                    <div id='Xtrail' className="content content-1" onClick={()=>{carClick('Xtrail')}} style={{padding: '0', margin: '10px'}}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'right', paddingRight: '20px'}}>
                            <p style={{fontSize: '20px', fontWeight: '900'}}>{xtrail}</p>
                        </div>
                        <img src={Xtrail} alt="Logo" style={{width: '20vh'}}/>
                        <p style={{fontSize: '10px'}}>XTRAIL 2023</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='Nismo_370z' className="content content-1" onClick={()=>{carClick('Nismo_370z')}} style={{padding: '0', margin: '10px'}}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'right', paddingRight: '20px'}}>
                            <p style={{fontSize: '20px', fontWeight: '900'}}>{nismoz}</p>
                        </div>
                        <img src={Nismo_370z} alt="Logo" style={{width: '20vh'}}/>  
                        <p style={{fontSize: '10px'}}>NISSAN NISMO 370Z</p>
                    </div>
                </div>
            </div>

            <div className='rower' style={{display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', margin: '0', padding:'0'}} >
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='Maxima' className="content content-1" onClick={()=>{carClick('Maxima')}} style={{padding: '0', margin: '10px'}}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'right', paddingRight: '20px'}}>
                            <p style={{fontSize: '20px', fontWeight: '900'}}>{maxima}</p>
                        </div>
                        <img src={Maxima} alt="Logo" style={{width: '20vh'}}/>  
                        <p style={{fontSize: '10px'}}>MAXIMA</p>
                    </div>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', padding: '0', margin: '0'}}>
                    <div id='Kicks' className="content content-1" onClick={()=>{carClick('Kicks')}} style={{padding: '0', margin: '10px'}}>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'right', paddingRight: '20px'}}>
                            <p style={{fontSize: '20px', fontWeight: '900'}}>{kicks}</p>
                        </div>
                        <img src={Kicks} alt="Logo" style={{width: '20vh'}}/>  
                        <p style={{fontSize: '10px'}}>KICKS</p>
                    </div>
                </div>
                
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'10px'}}>
                <button className="grab" id='return' style={{width:"150px", margin: '10px', borderRadius: '5px', padding: '10px', color: 'white', backgroundColor: 'black'}} onClick= {() => Handleclick(car)}>Next</button>
            </div>

        </div>
    )
}

export default UserNissan