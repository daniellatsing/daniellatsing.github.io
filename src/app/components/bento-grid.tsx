"use client";

import { cn } from "../../../utils/cn";
import Link from "next/link";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "columns-2 md:columns-2 lg:columns-3 gap-4 max-w-6xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  date,
  description,
  header,
  link
}: {
  className?: string;
  title?: string | React.ReactNode;
  date?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  link?: string;
}) => {
  return (
    <div 
        className={cn(
            "break-inside-avoid mb-8 group/bento",
            className
        )}
    >
        <Link href={link ?? "#"} rel="noopener noreferrer">
            <div className="rounded-md hover:shadow-md hover:-translate-y-1 transition duration-200 shadow-input dark:shadow-none p-2 dark:bg-white-two dark:border-white/[0.2] bg-white-two border border-french-gray flex flex-col">
                {header}
            </div>
            <div className="flex flex-col px-2">
                <div className="flex items-center">
                    <div className="flex-1 font-satoshi font-bold text-night text-lg dark:text-neutral-200 mt-2 truncate md:not-truncate md:text-xl">
                        {title}
                    </div>
                    <div className="font-satoshi font-bold text-paynes-gray text-md mt-2 dark:text-cadet-gray">
                        {date}
                    </div>
                </div>  
                <div className="font-satoshi font-bold text-paynes-gray text-lg md:text-xl dark:text-cadet-gray">
                    {description}
                </div>
            </div>
        </Link>
    </div>
  );
};
