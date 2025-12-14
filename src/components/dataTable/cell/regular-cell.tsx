"";

import type { VariantProps } from "class-variance-authority";
import { CheckIcon, CopyIcon } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Text, type textVariants } from "@/components/ui/text";
import { cn } from "@/lib/utils";

interface RegularCellProps {
	title: string;
	hasCopyButton?: boolean;
	className?: string;
	variant?: VariantProps<typeof textVariants>["variant"];
}

export default function RegularCell({
	title,
	hasCopyButton = false,
	...props
}: RegularCellProps) {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		e.stopPropagation();
		navigator.clipboard.writeText(title);
		setIsCopied(true);
		setTimeout(() => setIsCopied(false), 2000);
	};

	return (
		<Text
			variant={props.variant || "base"}
			{...props}
			className={cn(
				"line-clamp-1 group inline-flex text-left justify-start items-center gap-2.5 max-w-68.5 min-w-20",
				hasCopyButton && "cursor-pointer",
				props.className,
			)}
			onClick={
				hasCopyButton
					? (e: React.MouseEvent<HTMLDivElement>) => handleCopy(e)
					: undefined
			}
			title={title}
			as="div"
		>
			<p className="break-all">{title}</p>
			{hasCopyButton && (
				<button type="button" className="cursor-pointer shrink-0">
					{isCopied ? (
						<CheckIcon className="size-3.5 " />
					) : (
						<CopyIcon className="size-3.5" />
					)}
				</button>
			)}
		</Text>
	);
}
