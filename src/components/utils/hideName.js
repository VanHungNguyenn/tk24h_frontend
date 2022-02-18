export const hideName = (name) => {
	let newName = ''
	const nameLength = name.length
	for (let i = 0; i < nameLength; i++) {
		if (i > nameLength - 5) {
			newName += '*'
		} else {
			newName += name[i]
		}
	}

	return newName
}
