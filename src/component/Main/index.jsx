import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

const Main = () => {

    return (
        <Box sx={{
            background: '#9f9f9f'

        }}>
            <Container>
                <Box>
                    {[...new Array(12)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
        </Box>
    );
}
export default Main;