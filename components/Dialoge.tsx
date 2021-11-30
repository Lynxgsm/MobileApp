import * as React from 'react';
import { Button, Dialog, Portal } from 'react-native-paper';

const Dialogue = () => {
    const [visible, setVisible] = React.useState(true);

    const hideDialog = () => setVisible(true);

    return (
        <Portal>
            <Dialog visible={true} >
                <Dialog.Actions>
                    <Button onPress={() => console.log('Cancel')}>Cancel</Button>
                    <Button onPress={() => console.log('Ok')}>Ok</Button>
                </Dialog.Actions>
            </Dialog>
        </Portal>
    );
};

export default Dialogue;