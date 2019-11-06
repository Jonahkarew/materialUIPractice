import React from 'react';
import Box from '@material-ui/core/box';
import Button from '@material-ui/core/Button'

const Boxer= () => {
    return (
        <div>
            <Box color="text.primary">
  {props => <Button {...props}>this is content</Button> }
</Box>
        </div>
    )
}

export default Boxer;