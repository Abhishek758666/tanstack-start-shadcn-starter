import type React from "react";
import { cn } from "@/lib/utils";

interface ImageCellProps {
	title: string;
	description?: string;
	image?: string;
	icon2?: React.ReactNode;
	description2?: string;
	className?: string;
	variant?: "lg" | "sm";
	label?: string;
	w?: number;
	h?: number;
	brandIdentifier?: string;
}

export default function ImageCell({
	title,
	description,
	image,
	icon2,
	description2,
	className,
	variant = "lg",
	label,
	w = 8,
	h = 8,
	brandIdentifier,
	...props
}: ImageCellProps) {
	const canCopy = title && description;

	const copyToClipboard = () => {
		if (!canCopy) return;
		navigator.clipboard.writeText(title);
	};

	// Generate Tailwind classes based on w and h props
	const sizeClasses = `w-${w} h-${h}`;

	return (
		<div {...props} className={cn("max-w-70 min-w-30 w-fit", className)}>
			{label && <div className="text-slate-500 text-xs mb-2">{label}</div>}

			<div className="flex items-center gap-3 min-w-0">
				<div className="shrink-0">
					<img
						src={image ?? "/fallback.jpg"}
						alt={title}
						width={w * 4}
						height={h * 4}
						className={cn(
							sizeClasses,
							"rounded object-cover border border-slate-200",
						)}
					/>
				</div>

				<div className="flex flex-col min-w-0 flex-1">
					<button
						type="button"
						className={cn(
							"font-medium text-slate-900 truncate text-left bg-transparent border-none p-0",
							variant === "sm" ? "text-sm" : "text-sm",
							canCopy && "cursor-pointer hover:text-slate-700",
						)}
						title={title}
						onClick={copyToClipboard}
						disabled={!canCopy}
					>
						{title}
					</button>

					{description && (
						<div
							className="text-slate-500 text-xs truncate mt-0.5"
							title={description}
						>
							{description}
						</div>
					)}
				</div>
			</div>

			{description2 && (
				<div className="flex items-center gap-2 min-w-0 mt-1">
					{icon2 && (
						<div className="shrink-0 w-4 h-4 flex items-center justify-center text-slate-400">
							{icon2}
						</div>
					)}
					<div
						className="text-slate-500 text-xs truncate min-w-0 flex-1"
						title={description2}
					>
						{description2}
					</div>
				</div>
			)}
		</div>
	);
}
