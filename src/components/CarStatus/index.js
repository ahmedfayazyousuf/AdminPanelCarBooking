

const TimeSlot = () => {
    
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
                            <td>Slots Booked</td>
                        </tr>
                    </thead>
                    
                    <tbody>
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
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default TimeSlot