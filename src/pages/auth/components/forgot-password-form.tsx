import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import EmailInputField from "@/components/form/email-input-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

const forgotPasswordSchema = z.object({
	email: z.string().email("Please enter a valid email address"),
});

type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export function ForgotPasswordForm() {
	const [isLoading, setIsLoading] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const form = useForm<ForgotPasswordFormData>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: "",
		},
	});

	const onSubmit = async (data: ForgotPasswordFormData) => {
		setIsLoading(true);
		try {
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log("Password reset requested for:", data.email);
			setIsSuccess(true);
		} catch (error) {
			console.error("Password reset error:", error);
		} finally {
			setIsLoading(false);
		}
	};

	if (isSuccess) {
		return (
			<div className="text-center space-y-6">
				<div className="flex justify-center">
					<div className="rounded-full bg-green-100 p-3 dark:bg-green-900/20">
						<CheckCircle2 className="h-10 w-10 text-green-600 dark:text-green-500" />
					</div>
				</div>
				<div className="space-y-2">
					<h3 className="text-xl font-semibold text-foreground">
						Check your email
					</h3>
					<p className="text-sm text-muted-foreground leading-relaxed">
						We've sent a password reset link to your email address. Please check
						your inbox and follow the instructions.
					</p>
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<EmailInputField name="email" label="Email" placeholder="Email..." />
					<Button type="submit" className="w-full" disabled={isLoading}>
						{isLoading && <LoaderCircle className="mr-2 animate-spin" />}
						Send reset link
					</Button>
				</form>
			</Form>
		</div>
	);
}
