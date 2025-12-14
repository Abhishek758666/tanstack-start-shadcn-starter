import { Link } from "@tanstack/react-router";
import { Eye, EyeClosed, LockIcon } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import type { IFieldInputProps } from "@/interface/form";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
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

const PasswordInputField = ({
	label,
	name,
	placeholder,
	description,
	required = false,
	className,
	showForgotPassword,
	showIcon = true,
}: IFieldInputProps) => {
	const [showPassword, setShowPassword] = useState(false);
	const form = useFormContext();
	return (
		<FormField
			control={form.control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel className="flex justify-between">
						<span>
							{label}
							{required && "*"}
						</span>

						{showForgotPassword && (
							<span className="text-end">
								<Link to="/forgot-password" className="hover:underline">
									forgot password?
								</Link>
							</span>
						)}
					</FormLabel>
					<FormControl>
						<InputGroup>
							<InputGroupInput
								placeholder={placeholder}
								{...field}
								type={showPassword ? "text" : "password"}
								className={cn(className)}
							/>
							<InputGroupAddon>{showIcon && <LockIcon />}</InputGroupAddon>
							<InputGroupAddon align={"inline-end"}>
								<Button
									size={"sm"}
									type="button"
									className="rounded-full"
									variant={"ghost"}
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? <Eye /> : <EyeClosed />}
								</Button>
							</InputGroupAddon>
						</InputGroup>
					</FormControl>

					{description && <FormDescription>{description}</FormDescription>}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default PasswordInputField;
