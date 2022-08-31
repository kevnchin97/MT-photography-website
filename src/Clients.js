import Grid from '@mui/material/Grid';
import levels from './levels.jpg';
import drivefest from './drivefest.png';
import djoj from './djoj.png';
const Clients = () => {
    return (
        <div className="wrapper">
            <h2 className='clientsTitle'>CLIENTS I'VE WORKED WITH</h2>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <img src={levels}
                        alt='levels entertainment'
                        style={{ width: 300, height: 150 }}                    ></img>
                </Grid>
                <Grid item xs={4}>
                    <img src={djoj}
                        alt='dj OJ artist'
                        style={{ width: 300, height: 150 }}
                    ></img>
                </Grid>
                <Grid item xs={4}>
                    <img src={drivefest}
                        alt='drive festival toronto'
                        style={{ width: 300, height: 150 }}
                    ></img>
                </Grid>

            </Grid>
        </div >
    )
}

export default Clients