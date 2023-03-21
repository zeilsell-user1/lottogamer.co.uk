export type CmsNavItem = {
  key: string;
  enabled: boolean;
  title: string;
  description?: string;
  url?: string;
  subMenuItems?: CmsSubNavItem[];
};

export type CmsSubNavItem = {
  key: string;
  enabled: boolean;
  title: string;
  description?: string;
  url: string;
};

export type CmsImage = {
  attribution: string;
  caption: string;
  reference: string;
};
