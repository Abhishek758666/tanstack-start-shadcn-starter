# TanStack Start Starter Kit

> A production-ready starter template for building modern web applications built by **Abhishek**

[![Built with TanStack](https://img.shields.io/badge/Built%20with-TanStack-FF4154?style=flat-square)](https://tanstack.com)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![TailwindCSS 4](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## ✨ Features

- 🚀 **TanStack Start** - Full-stack React framework with file-based routing
- 📊 **TanStack Table** - Powerful data tables with sorting, filtering, pagination
- 🔄 **TanStack Query** - Server state management with caching
- 🎨 **Shadcn/ui Components** - Beautiful, accessible UI components
- 🌙 **Theme System** - Dark/light mode with customizable themes
- 📱 **Responsive Sidebar** - Configurable sidebar with multiple variants
- 🔐 **Auth Pages** - Ready-to-use authentication pages
- 📝 **Form Handling** - React Hook Form + Zod validation
- 🎭 **Drag & Drop** - Built-in DnD support for tables
- 🧪 **Testing Ready** - Vitest + Testing Library configured

---

## 📁 Folder Structure

```
├── public/                    # Static assets
├── src/
│   ├── components/
│   │   ├── dataTable/
│   │   │   └── index.tsx
│   │   ├── form/
│   │   ├── layout/
│   │   ├── providers/
│   │   └── ui/
│   ├── config/
│   ├── contexts/
│   ├── hooks/
│   │   ├── use-circular-transition.ts
│   │   ├── use-mobile.ts
│   │   ├── use-pagination.tsx
│   │   ├── use-sidebar-config.ts
│   │   ├── use-sidebar.ts
│   │   ├── use-store.ts
│   │   └── use-theme-manager.ts
│   ├── integrations/
│   ├── interface/
│   ├── lib/
│   ├── pages/
│   │   ├── auth/
│   │   ├── dashboard/
│   │   └── landing/
│   ├── routes/                # TanStack Router routes
│   │   ├── _auth/
│   │   │   ├── forgot-password.tsx
│   │   │   ├── sign-in.tsx
│   │   │   └── sign-up.tsx
│   │   ├── dashboard/
│   │   │   ├── data-table.tsx
│   │   │   ├── faqs.tsx
│   │   │   ├── form.tsx
│   │   │   ├── index.tsx
│   │   │   ├── route.tsx
│   │   │   └── settings.tsx
│   │   ├── __root.tsx
│   │   └── index.tsx
│   ├── schemas/
│   ├── types/
│   └── utils/
├── biome.json
├── components.json
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Lint & format
pnpm check
```

---

## 🧩 Ready-to-Use Components

### UI Components (`src/components/ui/`)

| Component | Description |
|-----------|-------------|
| `Accordion` | Expandable content sections |
| `Animated Theme Toggler` | Theme toggle with animation |
| `Avatar` | User avatars with fallback |
| `Badge` | Status and label badges |
| `Breadcrumb` | Navigation breadcrumbs |
| `Button` | Multi-variant button component |
| `Card` | Content container with header/footer |
| `Chart` | Recharts wrapper for data visualization |
| `Checkbox` | Form checkbox input |
| `Collapsible` | Toggle visibility of content |
| `Color Picker` | Color selection component |
| `Dialog` | Modal dialog component |
| `Drawer` | Slide-out panel |
| `Dropdown Menu` | Context menus and dropdowns |
| `Form` | Form wrapper with validation |
| `Glow` | Glow effect component |
| `Input` | Text input with variants |
| `Input Group` | Input with addons (icons, buttons) |
| `Item` | Generic item component |
| `Label` | Form field labels |
| `Logo` | Application logo component |
| `Navbar` | Navigation bar component |
| `Navigation Menu` | Navigation menu component |
| `Pricing Column` | Pricing table column |
| `Select` | Dropdown select component |
| `Separator` | Horizontal/vertical dividers |
| `Sheet` | Side panel overlay |
| `Sidebar` | Configurable navigation sidebar |
| `Skeleton` | Loading placeholder |
| `Sonner (Toast)` | Toast notifications |
| `Table` | Basic table component |
| `Tabs` | Tabbed content navigation |
| `Text` | Typography component |
| `Textarea` | Multi-line text input |
| `Theme Toggle` | Dark/light mode switch |
| `Toggle` | Toggle button |
| `Toggle Group` | Group of toggle buttons |
| `Tooltip` | Hover tooltips |

### Form Components (`src/components/form/`)

```tsx
import { EmailInputField } from "@/components/form/email-input-field";
import { PasswordInputField } from "@/components/form/password-input-field";
import { UserInputField } from "@/components/form/user-input-field";

// Usage with React Hook Form
<EmailInputField control={form.control} name="email" />
<PasswordInputField control={form.control} name="password" />
<UserInputField control={form.control} name="username" />
```

### Layout Components (`src/components/layout/`)

- **AppSidebar** - Main navigation sidebar
- **NavMain** - Primary navigation items
- **NavSecondary** - Secondary navigation
- **SiteHeader** - Top header with breadcrumbs
- **ThemeCustomizer** - Theme customization panel

---

## 📊 DataTable Component

A powerful, feature-rich data table built on TanStack Table with drag-and-drop, sorting, filtering, pagination, and row selection.

### Basic Usage

```tsx
import { DataTable } from "@/components/dataTable";
import { columns, DraggableRow } from "./columns";
import { Toolbar } from "./toolbar";

function MyTablePage() {
  const data = [...]; // Your data array

  return (
    <DataTable
      data={data}
      columns={columns}
      DraggableRow={DraggableRow}
      toolbar={(table) => <Toolbar table={table} />}
      enableRowSelection={true}
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `TData[]` | required | Array of data to display |
| `columns` | `ColumnDef<TData, TValue>[]` | required | Column definitions |
| `DraggableRow` | `React.ComponentType` | required | Custom draggable row component |
| `toolbar` | `(table: Table<TData>) => ReactNode` | required | Toolbar render function |
| `enableRowSelection` | `boolean` | `false` | Enable row selection checkboxes |

### Defining Columns

```tsx
import { type ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

interface Order {
  id: string;
  customerName: string;
  email: string;
  status: string;
  amount: number;
}

export const columns: ColumnDef<Order>[] = [
  // Selection column
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
  },
  // Data columns
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    enableSorting: true,
    cell: ({ row }) => `$${row.original.amount.toFixed(2)}`,
  },
];
```

### Creating a Draggable Row

```tsx
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { flexRender, type Row } from "@tanstack/react-table";
import { TableCell, TableRow } from "@/components/ui/table";

export const DraggableRow = ({ row }: { row: Row<Order> }) => {
  const { transform, transition, setNodeRef, isDragging } = useSortable({
    id: row.original.id,
  });

  return (
    <TableRow
      data-state={row.getIsSelected() && "selected"}
      data-dragging={isDragging}
      ref={setNodeRef}
      style={{
        transform: CSS.Transform.toString(transform),
        transition,
        transition,
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <TableCell key={cell.id}>
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </TableCell>
      ))}
    </TableRow>
  );
};
```

### Creating a Toolbar

```tsx
import type { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ToolbarProps {
  table: Table<Order>;
}

export const Toolbar = ({ table }: ToolbarProps) => {
  const customerColumn = table.getColumn("customerName");

  return (
    <div className="flex items-center gap-2">
      {/* Search Input */}
      <Input
        placeholder="Search customers..."
        onChange={(e) => customerColumn?.setFilterValue(e.target.value)}
        className="max-w-sm"
      />

      {/* Status Filter */}
      <Select
        onValueChange={(value) =>
          table.getColumn("status")?.setFilterValue(value === "all" ? undefined : value)
        }
      >
        <SelectTrigger className="w-[150px]">
          <SelectValue placeholder="Filter status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>

      {/* Column Visibility Toggle */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Columns</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {table.getAllColumns()
            .filter((col) => col.getCanHide())
            .map((column) => (
              <DropdownMenuCheckboxItem
                key={column.id}
                checked={column.getIsVisible()}
                onCheckedChange={(val) => column.toggleVisibility(val)}
              >
                {column.id}
              </DropdownMenuCheckboxItem>
            ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
```

### Features

#### ✅ Sorting
Click on column headers to sort. Arrows indicate sort direction.

#### ✅ Filtering
Use the toolbar to filter by any column. Supports text search and select filters.

#### ✅ Pagination
Built-in pagination with:
- Page navigation (first, previous, next, last)
- Rows per page selector (10, 20, 30, 40, 50)
- Current page indicator

#### ✅ Row Selection
Enable with `enableRowSelection={true}`:
- Individual row selection
- Select all rows on page
- Selection count display

#### ✅ Column Visibility
Toggle column visibility from the toolbar dropdown.

#### ✅ Drag & Drop Reordering
Rows can be reordered by dragging using the grip handle.

---

## 🎨 Theming

### Theme Configuration

```tsx
import { ThemeProvider } from "@/components/providers/theme-provider";

<ThemeProvider defaultTheme="system" storageKey="my-app-theme">
  <App />
</ThemeProvider>
```

### Using Theme Toggle

```tsx
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

// Simple toggle
<ThemeToggle />

// Animated toggle
<AnimatedThemeToggler />
```

### Theme Customizer

The app includes a built-in theme customizer accessible from the dashboard:
- Light/Dark/System mode
- Sidebar position (left/right)
- Sidebar variants (sidebar, floating, inset)
- Collapsible modes (icon, offcanvas, none)

---

## 🪝 Custom Hooks

| Hook | Description |
|------|-------------|
| `useMobile()` | Detect mobile viewport |
| `usePagination()` | Pagination state management |
| `useSidebar()` | Sidebar state and controls |
| `useSidebarConfig()` | Sidebar configuration |
| `useStore()` | Zustand store access |
| `useThemeManager()` | Theme management utilities |
| `useCircularTransition()` | Circular animation for theme toggle |

---

## 📦 Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | TanStack Start, React 19 |
| **Routing** | TanStack Router |
| **State** | TanStack Query, Zustand |
| **Tables** | TanStack Table |
| **Styling** | TailwindCSS 4, CVA |
| **Forms** | React Hook Form, Zod |
| **UI** | Radix UI, Shadcn/ui |
| **DnD** | dnd-kit |
| **Charts** | Recharts |
| **Icons** | Lucide React |
| **Linting** | Biome |
| **Testing** | Vitest, Testing Library |

---

## 📄 Scripts

```bash
pnpm dev       # Start dev server on port 3000
pnpm build     # Build for production
pnpm preview   # Preview production build
pnpm test      # Run tests
pnpm format    # Format code with Biome
pnpm lint      # Lint code with Biome
pnpm check     # Run all Biome checks
```

---

## 📂 File Conventions

- **Routes**: `src/routes/*.tsx` - File-based routing
- **Pages**: `src/pages/**/*.tsx` - Page component implementations
- **Components**: `src/components/**/*.tsx` - Reusable components
- **Hooks**: `src/hooks/use-*.ts` - Custom React hooks
- **Types**: `src/types/*.ts` & `src/interface/*.ts` - TypeScript definitions
- **Schemas**: `src/schemas/*.ts` - Zod validation schemas

---

## 🙌 Author

**Built by Abhishek**

---

## 📝 License

MIT License - feel free to use this starter for your projects!
