"";

import type React from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface PrimaryCellProps {
	title: string;
	description?: string;
	icon?: React.ReactNode;
	icon2?: React.ReactNode;
	description2?: string;
	className?: string;
	variant?: "lg" | "sm";
	label?: string;
}

export default function PrimaryCell({
	title,
	description,
	icon,
	icon2,
	description2,
	className,
	variant = "lg",
	label,
	...props
}: PrimaryCellProps) {
	const canCopy = title && description;

	const copyToClipboard = () => {
		if (!canCopy) return;
		navigator.clipboard.writeText(title);
	};

	return (
		<div
			{...props}
			className={cn("space-y-2 max-w-37.5 min-w-20 w-fit", className)}
		>
			{label && (
				<div className="text-muted-foreground text-xs leading-[150%]">
					{label}
				</div>
			)}
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<button
							type="button"
							className={cn(
								"font-semibold line-clamp-2 cursor-default ",
								variant === "lg" ? "text-base leading-6" : "text-sm leading-5",
								canCopy && "cursor-pointer",
							)}
							title={title}
							onClick={copyToClipboard}
						>
							{title}
						</button>
					</TooltipTrigger>
					<TooltipContent>
						<p>{title}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<div className="flex items-center gap-2 min-w-0">
				{icon && (
					<div className="shrink-0 size-4 flex items-center justify-center text-muted-foreground">
						{icon}
					</div>
				)}
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger asChild>
							<div
								className="text-muted-foreground text-xs leading-[150%] truncate min-w-0 flex-1 cursor-default"
								title={description}
							>
								{description}
							</div>
						</TooltipTrigger>
						<TooltipContent>
							<p>{description}</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			</div>
			{description2 && (
				<div className="flex items-center gap-2 min-w-0">
					{icon2 && (
						<div className="shrink-0 size-4 flex items-center justify-center text-muted-foreground">
							{icon2}
						</div>
					)}
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<div
									className="text-muted-foreground text-xs leading-[150%] truncate min-w-0 flex-1 cursor-default"
									title={description2}
								>
									{description2}
								</div>
							</TooltipTrigger>
							<TooltipContent>
								<p>{description2}</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
			)}
		</div>
	);
}
