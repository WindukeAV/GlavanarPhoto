import React from 'react';
import styles from './Modal.scss'

import icon from '../../assets/icons/cancel.svg'

export interface ModalProps {
	title: string;
	isOpen: boolean;
	onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
	title,
	isOpen,
	onClose,
	children
}) => {
	const overlayRef = React.useRef(null);

	const handleOverlayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (e.target === overlayRef.current) {
			onClose();
		}
	}

	return isOpen ? (
		<div className={styles.modal}>
			<div 
				className={styles.modal__overlay}
				ref={overlayRef}
				onClick={handleOverlayClick}
			/>
			<div className={styles.modal__box}>
				<button 
					className={styles.modal__close}
					onClick={onClose}	
				>
					<img className={styles.modal__closebtn} src={icon} alt={'close modal'}/>
				</button>
				<div className={styles.modal__title}> 
					{title}
				</div>
				<div className={styles.modal__content}>
					{children}
				</div>
			</div>
		</div>
	) : null;
};