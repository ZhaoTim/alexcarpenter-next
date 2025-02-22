import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import type { TooltipTriggerProps } from "@react-types/tooltip";
import { useTooltipTrigger } from "@react-aria/tooltip";
import { useTooltipTriggerState } from "@react-stately/tooltip";
import clsx from "clsx";
import Tooltip from "@/components/Tooltip";

interface FacepileProps {
  people: Array<{
    image: string;
    name: string;
    link: string;
  }>;
}

interface PersonProps {
  image: string;
  name: string;
  link: string;
}

const Person: React.FC<TooltipTriggerProps & PersonProps> = (props) => {
  let state = useTooltipTriggerState(props);
  let ref = React.useRef<HTMLAnchorElement | null>(null);
  let { triggerProps, tooltipProps } = useTooltipTrigger(props, state, ref);

  return (
    <span
      className={clsx(
        "relative flex border-4 rounded-full -ml-2 hover:z-10",
        "border-white",
        "dark:border-gray-900"
      )}
    >
      <Link href={props.link}>
        <a ref={ref} {...triggerProps} className="flex rounded-full">
          <Image
            className="rounded-full"
            src={props.image}
            width={32}
            height={32}
            alt={props.name}
            layout="intrinsic"
          />
        </a>
      </Link>
      <Tooltip state={state} {...tooltipProps}>
        {props.name}
      </Tooltip>
    </span>
  );
};

const Facepile = ({ people }: FacepileProps) => {
  return (
    <ul className="flex pl-2">
      {people.map((person, index) => {
        return (
          <li key={index}>
            <Person
              link={person.link}
              image={person.image}
              name={person.name}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Facepile;
