import React, { useCallback, useContext, useState } from "react";
import RegModal from "../modals/RegModal";
import LoginModal from "../modals/LoginModal";
import ProfileModal from "../modals/ProfileModal";
import NewWalletModal from "../modals/NewWalletModal";
import SearchModal from "../modals/SearchModal";
import YesNoModal from "../modals/YesNoModal";
import ErrorModal from "../modals/ErrorModal";

const ModalContext = React.createContext();
ModalContext.displayName = "ModalContext";

export const MODALS = {
	REG: "REG",
	LOGIN: "LOGIN",
	PROFILE: "PROFILE",
	NEWWALLET: "NEWWALLET",
	SEARCH: "SEARCH",
	YESNO: "YESNO",
	ERROR: "ERROR",
	NONE: "NONE",
};

export function Modals() {
	return (
		<ModalContext.Consumer>
			{(context) => {
				const onClose = () => context.showModal(MODALS.NONE);

				switch (context.currentModal) {
					case MODALS.REG:
						return <RegModal onClose={onClose} {...context.modalProps} />;
					case MODALS.LOGIN:
						return <LoginModal onClose={onClose} {...context.modalProps} />;
					case MODALS.PROFILE:
						return <ProfileModal onClose={onClose} {...context.modalProps} />;
					case MODALS.NEWWALLET:
						return <NewWalletModal onClose={onClose} {...context.modalProps} />;
					case MODALS.SEARCH:
						return <SearchModal onClose={onClose} {...context.modalProps} />;
					case MODALS.YESNO:
						return <YesNoModal onClose={onClose} {...context.modalProps} />;
					case MODALS.ERROR:
						return <ErrorModal onClose={onClose} {...context.modalProps} />;
					case MODALS.NONE:
					default:
						return null;
				}
			}}
		</ModalContext.Consumer>
	);
}

export function ModalContextProvider({ children }) {
	const [currentModal, setCurrentModal] = useState(false);
	const [modalProps, setModalProps] = useState({});
	const showModal = useCallback(
		(newModal, newModalProps = {}) => {
			setModalProps(newModalProps);
			setCurrentModal(newModal);
		},
		[setCurrentModal, setModalProps]
	);
	return (
		<ModalContext.Provider value={{ currentModal, showModal, modalProps }}>
			{children}
			<Modals />
		</ModalContext.Provider>
	);
}

export function useModals() {
	return useContext(ModalContext);
}
