import {
	BookAIcon,
	Calendar,
	CheckSquare,
	CreditCard,
	HelpCircle,
	LayoutDashboard,
	PaintBucket,
	Settings,
	TimerIcon,
} from "lucide-react";

export const data = {
	user: {
		name: "Abhishek Khati",
		email: "abhishekkhati39@gmail.com",
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
			label: "Components",
			items: [
				{
					title: "Datatable",
					url: "/dashboard/subjects",
					icon: BookAIcon,
				},
				{
					title: "Forms",
					url: "/dashboard/tasks",
					icon: CheckSquare,
				},
				{
					title: "File Upload",
					url: "/dashboard/pomodoro",
					icon: TimerIcon,
				},
				{
					title: "Notifications",
					url: "/dashboard/calendar",
					icon: Calendar,
				},
			],
		},
		{
			label: "Pages",
			items: [
				{
					title: "Dashboard",
					url: "/dashboard",
					icon: PaintBucket,
				},
				{
					title: "Sign In",
					url: "/sign-in",
					icon: Settings,
				},
				{
					title: "Sign Up",
					url: "/sign-up",
					icon: HelpCircle,
				},
				{
					title: "Forgot Password",
					url: "/forgot-password",
					icon: CreditCard,
				},
				{
					title: "Landing Page",
					url: "/",
					icon: CreditCard,
				},
			],
		},
	],
};
