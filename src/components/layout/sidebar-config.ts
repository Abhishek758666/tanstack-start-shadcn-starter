import {
	AlertTriangle,
	FormInputIcon,
	HelpCircle,
	LayoutDashboard,
	LayoutTemplate,
	Table,
	User2,
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
					url: "/data-table",
					icon: Table,
				},
				{
					title: "Form",
					url: "/form",
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
					icon: User2,
				},
				{
					title: "Errors",
					url: "#",
					icon: AlertTriangle,
					items: [
						{
							title: "Unauthorized",
							url: "/errors/unauthorized",
						},
						{
							title: "Forbidden",
							url: "/errors/forbidden",
						},
						{
							title: "Not Found",
							url: "/errors/not-found",
						},
						{
							title: "Internal Server Error",
							url: "/errors/internal-server-error",
						},
						{
							title: "Under Maintenance",
							url: "/errors/under-maintenance",
						},
					],
				},
				{
					title: "FAQs",
					url: "/faqs",
					icon: HelpCircle,
				},
			],
		},
	],
};
