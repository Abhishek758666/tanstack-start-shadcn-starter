import { User } from "lucide-react";
import { useFormContext } from "react-hook-form";
import type { IFieldInputProps } from "@/interface/form";
import { cn } from "@/lib/utils";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "../ui/input-group";

const UserInputField = ({
	label,
	name,
	placeholder,
	description,
	required = false,
	className,
	showIcon = true,
}: IFieldInputProps) => {
	const form = useFormContext();
	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>
						{label}
						{required && <span className="text-destructive font-bold">*</span>}
					</FormLabel>
					<FormControl>
						<InputGroup>
							<InputGroupInput
								type="text"
								placeholder={placeholder}
								{...field}
								className={cn(className)}
							/>
							<InputGroupAddon>{showIcon && <User />}</InputGroupAddon>
						</InputGroup>
					</FormControl>

					{description && <FormDescription>{description}</FormDescription>}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default UserInputField;
