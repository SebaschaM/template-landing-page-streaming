import { Box } from "@mui/material";

const BackgroundImageStyle = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/244c5b0b-ece2-48ba-964c-d2b6df538c14/PE-es-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                zIndex: -1,
                filter: 'brightness(0.5)',
            }}
        />

    )
}

export default BackgroundImageStyle;