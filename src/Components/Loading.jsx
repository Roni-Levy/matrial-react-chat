import { XlviLoader } from "react-awesome-loaders";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    frame: {
        width: '99vw',
        height: '99vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export const Loading = () => {
    const classes = useStyles();

    return (
        <div className={classes.frame}>
            <XlviLoader
                boxColors={["#EF4444", "#F59E0B", "#6366F1"]}
                desktopSize={"90px"}
            />
        </div>
    );
};

export default Loading