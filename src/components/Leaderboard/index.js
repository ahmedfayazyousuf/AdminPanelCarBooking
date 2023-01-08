import { useEffect } from 'react';
import NissanLogo from '../Z_Images/nissanlogo.png';
import firebase from '../../firbase';

const Leaderboard = () => {

    useEffect(()=>{
         firebase.firestore().collection("CarUsers").orderBy("Score", "desc").orderBy("TimeTaken").get().then((doc) => {
            doc.forEach((doc)=>{
               var data =  doc.data();
                let row  = `<tr>
                            <td>${data.Email}</td>
                            <td>${data.Score}</td>
                            <td>${data.TimeTaken}</td>
                      </tr>`;
            let table = document.getElementById('table')
            table.innerHTML += row
            })
        });
    },[])

return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', textAlign: 'center',backgroundColor: 'white', height: '100vh', width: '100vw'}}>
        <div className="slotparent"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '100%'}}>
            <div style={{justifyContent: 'center', alignItems: 'center'}}>
                <img id='head' style={{width: '150px', marginBottom: '30px'}} src={NissanLogo} alt="Nissan Logo"/>
            </div>
            <div style={{overflowY: 'scroll', height: '50vh', width: '80vw', overflowX:'hidden'}}>
                <table id='table' class="table" style={{color: 'white', justifyContent: 'center', alignItems: 'center',textAlign: 'center', width: '80vw', height:'50vh', overflowY: 'scroll', overflowX:'hidden'}}>
                    {/* <tr style={{marginTop: '20px'}}>
                        <td style={{fontWeight: '700',fontSize:'12px', borderBottom: '2px solid black', backgroundColor: 'black', color: 'white'}}>EMAIL</td>
                        <td style={{fontWeight: '700', fontSize:'12px', borderBottom: '2px solid black', backgroundColor: 'black', color: 'white'}}>TIME TAKEN</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', fontWeight: '30', borderBottom: '1px solid black', padding: '5px'}}>EMAIL X</td>
                        <td style={{fontSize:'12px', borderBottom: '1px solid black', padding: '5px'}}>TIME X</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', fontWeight: '30', borderBottom: '1px solid black', padding: '5px'}}>EMAIL X</td>
                        <td style={{fontSize:'12px', borderBottom: '1px solid black', padding: '5px'}}>TIME X</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', fontWeight: '30', borderBottom: '1px solid black', padding: '5px'}}>EMAIL X</td>
                        <td style={{fontSize:'12px', borderBottom: '1px solid black', padding: '5px'}}>TIME X</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', fontWeight: '30', borderBottom: '1px solid black', padding: '5px'}}>EMAIL X</td>
                        <td style={{fontSize:'12px', borderBottom: '1px solid black', padding: '5px'}}>TIME X</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', fontWeight: '30', borderBottom: '1px solid black', padding: '5px'}}>EMAIL X</td>
                        <td style={{fontSize:'12px', borderBottom: '1px solid black', padding: '5px'}}>TIME X</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', fontWeight: '30', borderBottom: '1px solid black', padding: '5px'}}>EMAIL X</td>
                        <td style={{fontSize:'12px', borderBottom: '1px solid black', padding: '5px'}}>TIME X</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', fontWeight: '30', borderBottom: '1px solid black', padding: '5px'}}>EMAIL X</td>
                        <td style={{fontSize:'12px', borderBottom: '1px solid black', padding: '5px'}}>TIME X</td>
                    </tr>
                    <tr>
                        <td style={{fontSize:'12px', fontWeight: '30', borderBottom: '1px solid black', padding: '5px'}}>EMAIL X</td>
                        <td style={{fontSize:'12px', borderBottom: '1px solid black', padding: '5px'}}>TIME 4</td>
                    </tr> */}
                </table>
            </div>
                


            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <img src="https://firebasestorage.googleapis.com/v0/b/assetuploadformbuilder.appspot.com/o/images%2Fgetreadyexplore.png?alt=media&token=bedd3483-ca06-414d-940e-9185a0b808a1" alt="Logo" style={{width: '20vh', marginTop: '30px', marginBottom: '10px'}}/>
            </div>
        </div>
    </div>
)
}

export default Leaderboard