import {
	FormInputIcon,
	HelpCircle,
	LayoutDashboard,
	LayoutTemplate,
	Lock,
	Table,
	User2,
	UserCheck,
	UserCheck2,
} from "lucide-react";

export const data = {
	user: {
		name: "Abhishek Starter",
		email: "store@example.com",
		avatar: "",
	},
	navGroups: [
		{
			label: "",
			items: [
				{
					title: "Home",
					url: "/dashboard",
					icon: LayoutDashboard,
				},
			],
		},
		{
			label: "Examples",
			items: [
				{
					title: "Data table",
					url: "/dashboard/data-table",
					icon: Table,
				},
				{
					title: "Form",
					url: "/dashboard/form",
					icon: FormInputIcon,
				},
			],
		},
		{
			label: "Pages",
			items: [
				{
					title: "Landing",
					url: "/",
					target: "_blank",
					icon: LayoutTemplate,
				},
				{
					title: "Sign In",
					url: "/sign-in",
					icon: UserCheck,
				},
				{
					title: "Sign Up",
					url: "/sign-up",
					icon: User2,
				},
				{
					title: "Forgot Password",
					url: "/forgot-password",
					icon: Lock,
				},
				{
					title: "FAQs",
					url: "/dashboard/faqs",
					icon: HelpCircle,
				},
			],
		},
	],
};
