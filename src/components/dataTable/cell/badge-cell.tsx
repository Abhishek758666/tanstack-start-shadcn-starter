import type { VariantProps } from "class-variance-authority";
import { Badge, type badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

export default function BadgeCell({
	label,
	variant,
	className,
}: {
	label?: string;
	variant?: BadgeVariant;
	className?: string;
}) {
	return (
		<Badge
			variant={variant}
			className={cn("w-fit px-4  capitalize", className)}
		>
			{label?.toLowerCase() || "-"}
		</Badge>
	);
}
