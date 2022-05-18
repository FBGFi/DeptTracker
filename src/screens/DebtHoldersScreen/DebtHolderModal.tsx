import React, { useState, useContext } from "react";
import { GestureResponderEvent, TextInput, View, StyleSheet, NativeSyntheticEvent, TextInputSubmitEditingEventData } from "react-native";
import { ReactComponentProps } from "../../constants/types";
import { DebtHoldersContext, DebtsContext, useRemoveDebtHolder, useUpdateDebtHolderName } from "../../context";
import { CustomButton, CustomModal } from "../../components";
import { DebtPickerCard } from "./DebtPickerCard";
import {Colors} from "../../styles/colors";

interface DebtHolderModalProps extends ReactComponentProps {
    debtHolderId: string;
    setModal: (modal: any) => void;
}
interface EditDebtHolderInputProps extends ReactComponentProps {
    onSubmit: (input: string) => void;
    defaultValue: string;
    onBlur: () => void;
}

// TODO combine with one in debtmodal
const EditDebtHolderInput = (props: EditDebtHolderInputProps) => {
    const [input, setInput] = useState(props.defaultValue);
    
    const inputChanged = (e: string) => {
        setInput(e);
    }

    const onSubmitEditing = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => {
        props.onSubmit(input);
    };

    const submit = () => {
        props.onSubmit(input);
    }
    
    return (<View style={{ flexDirection: "row", paddingHorizontal: 5, paddingVertical: 10, backgroundColor: Colors.darkestBlue }}>
        <View style={{
                flex: 5,
                paddingHorizontal: 10,
                borderTopWidth: 3,
                borderBottomWidth: 3,
                borderLeftWidth: 3,
                borderColor: Colors.orange
            }}>
            <TextInput style={{
                color: Colors.lightText,
                fontSize: 20,
                fontFamily: "Quicksand-Medium",
            }} onBlur={props.onBlur} value={input} onChangeText={inputChanged} onSubmitEditing={onSubmitEditing} autoFocus={true} />
        </View>
        <CustomButton style={{flex: 1}} title="Save" onPress={() => submit()} />
    </View>)
}
export const DebtHolderModal = (props: DebtHolderModalProps) => {
    const { state } = useContext(DebtHoldersContext);
    const [editActive, setEditActive] = useState(false);
    const [focusedDebtId, setFocusedDebtId] = useState<string | undefined>(undefined);
    const [removeDebtHolder] = useRemoveDebtHolder();
    const [updateDebtHolderName] = useUpdateDebtHolderName();
    const debtsState = useContext(DebtsContext).state;

    // This does not trigger if the picker card is clicked, due to it being Touchable
    const onModalPress = (event: GestureResponderEvent) => {
        setFocusedDebtId(undefined);
    }

    const onDebtPickerCardPress = (debtId?: string) => {
        // Handle double pressing
        if (focusedDebtId === debtId) {
            setFocusedDebtId(undefined);
        } else {
            setFocusedDebtId(debtId);
        }
    }

    const onRemovePress = () => {
        removeDebtHolder(props.debtHolderId);
        props.setModal(null);
    }

    const editButtons = () => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "flex-end", padding: 5 }}>
                <CustomButton style={styles.editButton} title="Edit" onPress={() => setEditActive(true)} />
                <CustomButton style={styles.editButton} onPress={onRemovePress} title="Remove debtholder" />
            </View>
        );
    }

    const onEditSubmit = (input: string) => {
        setEditActive(false);
        updateDebtHolderName(props.debtHolderId, input);
    }

    return <CustomModal
        setModal={() => {
            props.setModal(null);
        }}
        onModalPress={onModalPress}
        headerButtons={editButtons()}
        outSideContent={editActive && <EditDebtHolderInput onBlur={() => setEditActive(false)} defaultValue={state[props.debtHolderId].name} onSubmit={onEditSubmit} />}
        title={state[props.debtHolderId].name}>
        {Object.keys(state[props.debtHolderId].debts).map(key => {
            if (debtsState[key].debtHolders.includes(props.debtHolderId)) {
                return (<DebtPickerCard
                    key={key}
                    onInteract={onDebtPickerCardPress}
                    debtId={key}
                    focusedDebtId={focusedDebtId}
                    debtHolderId={props.debtHolderId} />);
            }
        })}
    </CustomModal>
}

const styles = StyleSheet.create({
    editButton: {
        paddingHorizontal: 5,
        paddingVertical: 3,
        marginLeft: 5
    }
})