import React from "react";
import { useState } from "react"
import '../../../../Z_Styles/Nissan.css'
import { useNavigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const QX80Q3 = () => {
    const location = useLocation();
    const navigate = useNavigate();
        const [bool, setBool] = useState(false); 
        function Handleclick(e){
            if(e === 'option1'){
                document.getElementById(e).style.background = "black";
                document.getElementById(e).style.color = "white";
                document.getElementById('option2').style.background = "transparent";
                document.getElementById('option2').style.color = "black";
                document.getElementById('option3').style.background = "transparent";
                document.getElementById('option3').style.color = "black";
                document.getElementById('option4').style.background = "transparent";
                document.getElementById('option4').style.color = "black";
                setBool(false);
            }

            if(e === 'option2'){
                document.getElementById(e).style.background = "black";
                document.getElementById(e).style.color = "white";
                document.getElementById('option1').style.background = "transparent";
                document.getElementById('option1').style.color = "black";
                document.getElementById('option3').style.color = "black";
                document.getElementById('option3').style.background = "transparent";
                document.getElementById('option4').style.background = "transparent";
                document.getElementById('option4').style.color = "black";
                setBool(true);
            }

            if(e === 'option3'){
                document.getElementById(e).style.background = "black";
                document.getElementById(e).style.color = "white";
                document.getElementById('option1').style.background = "transparent";
                document.getElementById('option1').style.color = "black";
                document.getElementById('option2').style.background = "transparent";
                document.getElementById('option2').style.color = "black";
                document.getElementById('option4').style.background = "transparent";
                document.getElementById('option4').style.color = "black";
                setBool(false);
            }

            if(e === 'option4'){
                document.getElementById(e).style.background = "black";
                document.getElementById(e).style.color = "white";
                document.getElementById('option1').style.background = "transparent";
                document.getElementById('option1').style.color = "black";
                document.getElementById('option2').style.background = "transparent";
                document.getElementById('option2').style.color = "black";
                document.getElementById('option3').style.background = "transparent";
                document.getElementById('option3').style.color = "black";
                setBool(false);
            }
        }
        
        function handleSubmit(){
            if(bool === false){
                if(location.state.count === 2){
    
                    // var no = Math.floor(Math.random() * ((3-0) - 0 + 1)) + 0;
                    // var qn = [1,2,3,4];
    
                    // if (no !== -1) {
                    //     qn.splice(no, 1);
    
                    //     console.log(no)
                    //     console.log(qn)
    
                    //     navigate(`/`,{state:{count:1,qns:qn,score:0,car:location.state.car}})
                    // }    
                    
                    navigate(`/Score`,{state:{count:1,score:location.state.score,car:location.state.car,id:location.state.id,time:location.state.time}})
                
            }
    
                else{
                    var no = Math.floor(Math.random() * (((3- location.state.count)-0) - 0 + 1)) + 0;
                    var qn = location.state.qns;
                    var n = qn[no]
                    if (no !== -1) {
                        qn.splice(no, 1);
                    }
    
                    console.log(no)
                    console.log(qn)
    
                    navigate(`/QX80Q${n}`,{state:{count:location.state.count + 1,qns:qn,score:location.state.score,car:location.state.car,id:location.state.id,time:location.state.time}})
                }
            }
    
            else{
                if(location.state.count === 2){
    
                    // var no = Math.floor(Math.random() * ((3-0) - 0 + 1)) + 0;
                    // var qn = [1,2,3,4];
    
                    // if (no !== -1) {
                    //     qn.splice(no, 1);
    
                    //     console.log(no)
                    //     console.log(qn)
    
                    //     navigate(`/`,{state:{count:1,qns:qn,score:0,car:location.state.car}})
                    // }    
                    
                    navigate(`/Score`,{state:{count:1,score:location.state.score+1,car:location.state.car,id:location.state.id,time:location.state.time}})
                
            }
    
                else{
                    var no = Math.floor(Math.random() * (((3- location.state.count)-0) - 0 + 1)) + 0;
                    var qn = location.state.qns;
                    var n = qn[no]
                    if (no !== -1) {
                        qn.splice(no, 1);
                    }
    
                    console.log(no)
                    console.log(qn)
    
                    navigate(`/QX80Q${n}`,{state:{count:location.state.count + 1,qns:qn,score:location.state.score+1,car:location.state.car,id:location.state.id,time:location.state.time}})
                }
    
            }
        }
    
    return(
        <div style={{backgroundColor: 'white', height: '100vh', width: '100vw', overflowY: 'hidden'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Ftrivia.png?alt=media&token=a5975b8d-fd68-46ae-a90d-9acc6322df7f" alt="Logo" style={{width: '250px', marginTop: '60px', marginBottom: '20px'}}/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0', paddingLeft: '30px', paddingRight: '30px'}} >
                <p style={{fontSize: '15px', marginTop: '10px'}} >How many speakers are included in the QX80’s BOSE PERFORMANCE SERIES audio system?</p>
            </div>

            <div className="slotparent"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%', marginTop: '15px'}}>
                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '80%'}} id='slotparent'>
                    <button className="grab" id="option1" onClick={() => {Handleclick("option1")}} value="option1" style={{width:"170px", margin: '10px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>15 Speakers</button>
                    <button className="grab" id="option2" onClick={() => {Handleclick("option2")}} value="option2" style={{width:"170px", margin: '10px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>17 Speakers</button>
                </div>

                <div className="slotdiv" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '80%'}}>
                    <button className="grab" id="option3" onClick={() => {Handleclick("option3")}} value="option3" style={{width:"170px", margin: '10px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>13 Speakers</button>
                    <button className="grab" id="option4" onClick={() => {Handleclick("option4")}} value="option4" style={{width:"170px", margin: '10px', border:'1px solid black', borderRadius: '20px', padding: '10px', color: 'black', backgroundColor: 'transparent', cursor: 'grab'}}>12 Speakers</button>
                </div>

                <button className="grab" style={{width:"220px", marginTop: '40px', marginBottom: '40px', borderRadius: '10px', padding: '10px', color: 'white', backgroundColor: 'black', cursor: 'grab'}} onClick={handleSubmit}>NEXT</button>

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Fgetreadyexplore.png?alt=media&token=bedd3483-ca06-414d-940e-9185a0b808a1" alt="Logo" style={{width: '20vh', marginTop: '30px', marginBottom: '10px'}}/>
                </div>
            </div>
        </div>
    )
}

export default QX80Q3