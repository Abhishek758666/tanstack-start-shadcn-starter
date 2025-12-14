import { Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { SignUpForm } from "./components/sign-up-form";

const SignUpPage = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-muted/30 px-4 py-12">
			<div className="w-full max-w-md space-y-6">
				<div className="text-center space-y-2">
					<h1 className="text-3xl font-bold tracking-tight text-foreground">
						Create an account
					</h1>
					<p className="text-muted-foreground">
						Get started with your free account today
					</p>
				</div>

				<Card className="p-8 shadow-lg border-border/50">
					<SignUpForm />
				</Card>

				<div className="text-center text-sm">
					<span className="text-muted-foreground">
						Already have an account?{" "}
					</span>
					<Link
						to="/sign-in"
						className="font-semibold text-primary hover:underline"
					>
						Sign in
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;
