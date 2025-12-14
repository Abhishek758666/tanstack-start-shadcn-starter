import { format } from "date-fns";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

export default function DateCell({
	date,
	className,
	showTime = true,
	showDaysRemaining = false,
}: {
	date: string | null | undefined;
	className?: string;
	showTime?: boolean;
	showDaysRemaining?: boolean;
}) {
	// Check if date is null, undefined, empty string, or invalid
	if (!date || date.trim() === "") {
		return (
			<div className={cn("space-y-px", className)}>
				<Text
					variant="base"
					className="font-semibold whitespace-nowrap text-muted-foreground"
				>
					N/A
				</Text>
			</div>
		);
	}

	// Try to create a valid date object
	const dateObj = new Date(date);

	// Check if the date is invalid
	if (Number.isNaN(dateObj.getTime())) {
		return (
			<div className={cn("space-y-px", className)}>
				<Text
					variant="base"
					className="font-semibold whitespace-nowrap text-muted-foreground"
				>
					N/A
				</Text>
			</div>
		);
	}

	// Calculate days remaining if needed
	const getDaysRemaining = () => {
		if (!showDaysRemaining) return null;

		const today = new Date();
		today.setHours(0, 0, 0, 0); // Reset time to start of day

		const targetDate = new Date(dateObj);
		targetDate.setHours(0, 0, 0, 0); // Reset time to start of day

		const diffTime = targetDate.getTime() - today.getTime();
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

		if (diffDays > 0) {
			return `${diffDays} day${diffDays === 1 ? "" : "s"} remaining`;
		} else if (diffDays === 0) {
			return "Today";
		} else {
			return `${Math.abs(diffDays)} day${
				Math.abs(diffDays) === 1 ? "" : "s"
			} ago`;
		}
	};

	const daysRemainingText = getDaysRemaining();

	return (
		<div className={cn("space-y-px", className)}>
			<Text variant="base" className="font-semibold whitespace-nowrap">
				{format(dateObj, "dd MMM yyyy")}
			</Text>
			{showTime && (
				<Text
					variant="small"
					className="text-muted-foreground whitespace-nowrap"
				>
					{format(dateObj, "HH:mm a")}
				</Text>
			)}
			{daysRemainingText && (
				<Text
					variant="small"
					className="text-muted-foreground whitespace-nowrap"
				>
					{daysRemainingText}
				</Text>
			)}
		</div>
	);
}
