import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "@tanstack/react-router";
import { Github, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import EmailInputField from "@/components/form/email-input-field";
import PasswordInputField from "@/components/form/password-input-field";
import UserInputField from "@/components/form/user-input-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

const signUpSchema = z
	.object({
		name: z.string().min(2, "Name must be at least 2 characters"),
		email: z.string().email("Please enter a valid email address"),
		password: z.string().min(8, "Password must be at least 8 characters"),
		confirmPassword: z.string(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});

export type SignUpFormData = z.infer<typeof signUpSchema>;

export function SignUpForm() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<SignUpFormData>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			email: "",
		},
	});

	const handleGoogleSignUp = async () => {
		console.log("Google sign up");
	};

	const handleGithubSignUp = async () => {
		console.log("GitHub sign up");
	};

	const onSubmit = async (data: SignUpFormData) => {
		setIsLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log("Password reset requested for:", data.email);
			toast.success("logged in successfully");
			router.navigate({ to: "/dashboard" });
		} catch (error) {
			console.error("Password reset error:", error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="space-y-6">
			<div className="grid grid-cols-2 gap-4">
				<Button
					type="button"
					variant="outline"
					onClick={handleGoogleSignUp}
					className="w-full bg-transparent"
				>
					<svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
						<title>google icon</title>
						<path
							fill="currentColor"
							d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
						/>
						<path
							fill="currentColor"
							d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
						/>
						<path
							fill="currentColor"
							d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
						/>
						<path
							fill="currentColor"
							d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
						/>
					</svg>
					Google
				</Button>
				<Button
					type="button"
					variant="outline"
					onClick={handleGithubSignUp}
					className="w-full bg-transparent"
				>
					<Github className="mr-2 h-4 w-4" />
					GitHub
				</Button>
			</div>

			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						Or continue with
					</span>
				</div>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<UserInputField name="name" label="Name" placeholder="Name..." />
					<EmailInputField name="email" label="Email" placeholder="Email..." />
					<PasswordInputField
						name="password"
						label="Password"
						placeholder="Password..."
					/>
					<PasswordInputField
						name="confirmPassword"
						label="Confirm Password"
						placeholder="Confirm Password..."
					/>
					<Button type="submit" className="w-full" disabled={isLoading}>
						{isLoading && <LoaderCircle className="mr-2 animate-spin" />}
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
}
