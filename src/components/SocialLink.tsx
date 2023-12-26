import clsx from "clsx";
import Link from "next/link";

export const SocialLink = ({
                      className,
                      href,
                      children,
                      icon: Icon,
                    }: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children?: React.ReactNode
}) => (
  <li className={clsx(className, 'flex')}>
    <Link
      href={href}
      className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
    >
      <Icon className="h-6 w-6 flex-none text-zinc-500 transition group-hover:text-teal-500"/>
      {children && <span className="ml-4">{children}</span>}
    </Link>
  </li>
);
