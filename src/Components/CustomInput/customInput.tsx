import React, {ChangeEvent, FC, useState} from "react";
import searchIcon from "./search.svg"
import styles from "./index.module.scss"

type CustomInputPropsType = {
	width: string,
	InputSubmit: (inputValue: string) => void
}

export const CustomInput: FC<CustomInputPropsType> = ({
																																																							width,
																																																							InputSubmit
																																																						}) => {
	const [inputValue, setInputValue] = useState<string>("")

	const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.code === "Enter") {
			InputSubmit(inputValue)
		}
	};

	const handleInputValueChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
		if (e.target.value === "") {
			InputSubmit("")
		}
	}

	const handleInputSubmit = () => {
		InputSubmit(inputValue)
	}
	return (
		<div style={{width: `${width}`}} className={styles.main}>
			<input onKeyDown={handleInputKeyDown} type="text" placeholder="Поиск..." value={inputValue}
										onChange={handleInputValueChange}/>
			<button onClick={handleInputSubmit}><img src={searchIcon} alt="searchIcon"/></button>
		</div>
	);
};

