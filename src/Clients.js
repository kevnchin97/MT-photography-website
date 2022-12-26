import Grid from '@mui/material/Grid';
import levels from './levels.jpg';
import drivefest from './drivefest.png';
import djoj from './djoj.png';
import jasonross from './jasonross.jpg';
import gemlet from './gemlet.png';
import tribunal from './tribunal.jpg';
import dnr from './dnr.jpg';
const Clients = () => {
    return (
        <div className="wrapper animate__animated animate__fadeInDown">
            <h2 className='clientsTitle'>CLIENTS I'VE WORKED WITH</h2>
            <Grid container spacing={2}>
                <Grid item s={3} xl={4}>
                    <img src={levels}
                        alt='levels entertainment'
                    style={{ width: 300, height: 150 }}
                    ></img>
                </Grid>
                <Grid item s={3} xl={4}>
                    <img src={djoj}
                        alt='dj OJ artist'
                    style={{ width: 300, height: 150 }}
                    ></img>
                </Grid>
                <Grid item s={3} xl={4}>
                    <img src={drivefest}
                        alt='drive festival toronto'
                    style={{ width: 300, height: 150 }}
                    ></img>
                </Grid>
                <Grid item s={3} xl={4}>
                    <img src={jasonross}
                        alt='Jason Ross Artist'
                        style={{ width: 300, height: 150 }}
                    ></img>
                </Grid>
                <Grid item s={3} xl={4}>
                    <img src={gemlet}
                        alt='Toronto Jewerly Store Gemlet'
                        style={{ width: 300, height: 150 }}
                    ></img>
                </Grid>
                <Grid item s={3} xl={4}>
                    <img src={tribunal}
                        alt='promotion agency'
                        style={{ width: 300, height: 150 }}
                    ></img>
                </Grid>
                <Grid item s={3} xl={4}>
                    <img src={dnr}
                        alt='bass production company'
                        style={{ width: 300, height: 150 }}
                    ></img>
                </Grid>

            </Grid>
        </div >
    )
}

export default Clients