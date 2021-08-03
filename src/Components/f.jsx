import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    rightPanel:{
        width: '20%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    leftPanel: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        height: '100%',
    },
    leftBottomDivContainer: {
        display: 'flex',
        flexDirection: 'column-reverse',
        height: 'calc(100% - 100px)',
        backgroundColor: 'green', 
    },
    headerDiv: {
        height: '100px',
        backgroundColor: 'red', 
    },
    middleDiv: {
        height: 'auto',
        // marginTop: 0,
        overflow: 'auto',
        '@global': {
            '*::-webkit-s-crollbar': {
            width: 1
            },
            '*::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)'
            },
            '*::-webkit-scrollbar-thumb': {
                backgroundColor: 'rgba(0,0,0,.1)',
                borderRadius: '5px',
                outline: '1px solid slategrey'
            },
            '::-webkit-scrollbar-button:increment': {
                width: '0px'
            }
        },
    },
    flexBottomDiv: {
        maxHeight: '150px',
        mainHeight: '100px',
        overflow: 'hidden',
        backgroundColor: 'yellow', 
    },
}));
