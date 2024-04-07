import { Typography, CardMedia, Card, CardContent, CardActionArea, Box } from "@mui/material";
import { PeliculasData } from "../../seed";

const CardItemMovie = (idGenero: any) => {

    const peliculasPorCategoria = PeliculasData.filter(pelicula => pelicula.genero.id === idGenero.idGenero)

    return (
        <Box
            sx={{
                display: 'flex',
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                minWidth: '100%',
                /* CUSTOMIZA EL SCROLL */
                '&::-webkit-scrollbar': {
                    width: '0.4rem',
                    height: '0.5rem',
                    borderRadius: '0.2rem',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: '#cfd8dc',
                    borderRadius: '0.2rem',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#941B0C',
                    borderRadius: '0.2rem',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                    backgroundColor: '#941B0C',
                    borderRadius: '0.2rem',
                },

            }}
        >
            <Box
                display={'flex'}
                flexDirection={'row'}
                padding={'1rem'}
                columnGap={'1rem'}
            >
                {peliculasPorCategoria.map((pelicula, index) => (
                    <Card sx={{ width: 270, flexShrink: 0 }} key={index}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="180"
                                image={pelicula.imgPreview}
                                alt={pelicula.titulo}
                            />
                            <CardContent sx={{ whiteSpace: 'normal' }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {pelicula.titulo}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {pelicula.descripcionCorta}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default CardItemMovie;
