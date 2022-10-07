
import { Dialog, Box, styled } from '@mui/material';

//component

import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';

// css

const Component = styled(Box)`
   display: flex;
`;

const LeftComponent = styled(Box)`
    min-width: 450px;
`;

const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    heigth: 100%;
    border-Left: 1px solid grey
 `


const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: '0',
    boxShadow: 'none',
    overFlow: 'hidden'
}

const ChatDialog = () => {

    return (

        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
            maxWidth={'md'}
        >


            <Component>
                <LeftComponent>
                    <Menu />

                </LeftComponent>

                <RightComponent>
                    <EmptyChat />
                </RightComponent>
            </Component>
        </Dialog>
    )
}

export default ChatDialog;