// import Grid from '@mui/material/Grid';
import { ImageList } from '@mui/material';
import ImageListItem from '@mui/material/ImageListItem';
import _ from 'lodash';
const Highlight = () => {

    const numOfPhotos = 42;

    return (
        <ImageList className='wrapper animate__animated animate__fadeInDown' variant="masonry" cols={3} gap={10}>
            {_.times(numOfPhotos, (i) => (
                <ImageListItem key={i}>
                    <img
                        src={require(`./assets/${i + 1}.jpg?w=248&fit=crop&auto=format`)}
                        srcSet={require(`./assets/${i + 1}.jpg?w=248&fit=crop&auto=format&dpr=2 2x`)}
                        alt={`gallery photos ${i}`}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )


    // const numOfPhotos = 19;
    // return (
    //     <div className="wrapper animate__animated animate__fadeInDown">
    //         <Grid container spacing={2}>
    //             {
    //                 _.times(numOfPhotos, (i) => (
    //                     <Grid item xs={4}>
    //                         <img src={require(`./assets/${i + 1}.jpg`)}
    //                             alt='levels entertainment'
    //                         ></img>
    //                     </Grid>
    //                 ))
    //             }
    //         </Grid>
    //     </div >
    // )
}
export default Highlight