import React, { MouseEventHandler, useState } from "react";
import Link from "next/link";
import { CmsSubNavItem } from "../../features/cms-access";

type Props = {
  url: string;
  title: string;
  description?: string;
  subMenuItems?: CmsSubNavItem[];
};

const NavLink = ({url, title, description, subMenuItems }: Props): JSX.Element => {
  const [subMenuVisible, setSubMenuVisible] = useState(false);

  const renderSubMenu = (item: CmsSubNavItem) => {
    return (
      <div key={item.key}>
        {subMenuVisible && <Link href={item.url}>
          {item.title}
        </Link>}
      </div> 
    );
  };

  if (!url || !title) {
    return <div />;
  }
  return (
    <div 
      onMouseEnter={() => setSubMenuVisible(true)}
      onMouseLeave={() => setSubMenuVisible(false)} >
      <Link href={url}> {title} </Link>
      {subMenuItems && subMenuItems.map((si) => renderSubMenu(si))}
    </div>
  );
};

export default NavLink;
