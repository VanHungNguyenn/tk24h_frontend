import { Modal } from 'antd'

export const showSuccessModal = (msg, title = 'Thông báo') => {
	Modal.success({
		title: title,
		content: msg,
		onOk() {},
	})
}

export const showErrorModal = (msg, title = 'Thông báo') => {
	Modal.error({
		title: title,
		content: msg,
		onOk() {},
	})
}
