import { Button } from "@mui/material";

function SubmitButton({
	field,
	form: { touched, errors, isSubmitting },
	...props
}) {
	return (
		<Button
			{...field}
			disabled={isSubmitting}
			size={"large"}
			type="submit"
			fullWidth
			variant={"contained"}
			{...props}
		>
			{props.label}
		</Button>
	);
}
export default SubmitButton;
