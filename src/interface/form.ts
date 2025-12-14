export interface IFieldInputProps {
	showIcon?: boolean;
	label?: string;
	defaultValue?: string | null;
	name: string;
	placeholder?: string;
	description?: string;
	required?: boolean;
	className?: string;
	size?: "sm" | "md" | "lg";
	readOnly?: boolean;
	showForgotPassword?: boolean;
	help?: string;
	options?: {
		label: string;
		value: string | boolean;
		isDisabled?: boolean;
	}[];
	optionsWithSubOptions?: {
		label: string;
		options: { label: string; value: string | boolean; isDisabled?: boolean }[];
	}[];
	type?: "text" | "email" | "password" | "color" | "number";
	icon?: React.ReactNode;
	isClearable?: boolean;
	maxLength?: number;
	min?: number;
	max?: number;
	isSensitive?: boolean;
	onChange?:
		| ((e: React.ChangeEvent<HTMLInputElement>) => void)
		| ((option: { value: string; label: string } | null) => void);
	onInputChange?: (inputValue: string) => void;
	value?: any | null;
	// position?: MenuPlacement;
	onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	isLoading?: boolean;
	loadingText?: string;
	onlyLowercase?: boolean;
	onlyUppercase?: boolean;
	multiple?: boolean;
	hideRequiredIndicator?: boolean;
}
