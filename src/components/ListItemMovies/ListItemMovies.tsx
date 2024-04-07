import CardItemMovie from "../CardItemMovie/CardItemMovie";
import { Box, Typography } from "@mui/material";
import { GeneroPeliculaData } from "../../seed/index";
import theme from "../../../theme";

const ListItemMovies = () => {

    return (
        <>
            <Box sx={{
                padding: '2.5rem',
                paddingTop: '0',
            }}>
                <Box>
                    <Typography variant="h2" marginBottom={'2rem'} sx={{
                        [theme.breakpoints.down('customBreak1')]: {
                            textAlign: 'center',
                        },
                    }}>
                        Nuestras categorías
                    </Typography>
                    {GeneroPeliculaData.map((genero, index) => (
                        <Box key={index} marginBottom={'1.2rem'} >
                            <Typography variant="h3" marginBottom={'1.2rem'}>{genero.nombre}</Typography>
                            <CardItemMovie idGenero={genero.id} />
                        </Box>
                    ))}
                </Box>
            </Box>

        </>
    );
}

export default ListItemMovies;