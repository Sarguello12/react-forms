import useInput from "../hooks/use-input";

const BasicForm = (props) => {
	const {
		value: enteredFirstName,
		isValid: enteredFirstNameIsValid,
		hasError: firstNameInputHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstNameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredLastName,
		isValid: enteredLastNameIsValid,
		hasError: lastNameInputHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastNameInput,
	} = useInput((value) => value.trim() !== "");

	const {
		value: enteredEmail,
		isValid: enteredEmailIsValid,
		hasError: emailInputHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput((value) => value.includes("@"));

	let formIsValid = false;

	if (
		enteredFirstNameIsValid &&
		enteredLastNameIsValid &&
		enteredEmailIsValid
	) {
		formIsValid = true;
	}

	const firstNameClasses = firstNameInputHasError
		? "form-control invalid"
		: "form-control";

	const lastNameClasses = lastNameInputHasError
		? "form-control invalid"
		: "form-control";

	const emailClasses = emailInputHasError
		? "form-control invalid"
		: "form-control";

	const formSubmissionHandler = (event) => {
		event.preventDefault();

		if (!enteredFirstNameIsValid) {
			return;
		}
		if (!enteredLastNameIsValid) {
			return;
		}
		if (!enteredEmailIsValid) {
			return;
		}

		console.log(
			enteredFirstName + " " + enteredLastName + " : " + enteredEmail
		);

		resetFirstNameInput();
		resetLastNameInput();
		resetEmailInput();
	};

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className="control-group">
				<div className={firstNameClasses}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						value={enteredFirstName}
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
					/>
					{firstNameInputHasError && (
						<p className="error-text">First name must not be empty.</p>
					)}
				</div>
				<div className={lastNameClasses}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						value={enteredLastName}
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
					/>
					{lastNameInputHasError && (
						<p className="error-text">Last Name must not be empty.</p>
					)}
				</div>
			</div>
			<div className={emailClasses}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="text"
					id="name"
					value={enteredEmail}
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
				/>
				{emailInputHasError && (
					<p className="error-text">Email must not be empty.</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
