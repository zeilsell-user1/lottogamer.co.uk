import { Item, SubItem } from "@zeilsell-user1/accordion-component";

const subItem1: SubItem = {
  key: "subitem1",
  enabled: true,
  title: "First option",
  description: "this is subitem description 1",
  url: "https://www.bbc.co.uk",
};

const subItem2: SubItem = {
  key: "subitem2",
  enabled: true,
  title: "Second option",
  description: "this is subitem description 2",
  url: "https://www.bbc.co.uk/sport",
};

const subItem3: SubItem = {
  key: "subitem3",
  enabled: true,
  title: "Third option",
  description: "this is subitem description 3",
  url: "https://www.bbc.co.uk/news",
};

const subItem4: SubItem = {
  key: "subitem4",
  enabled: true,
  title: "123456789012345",
  description: "123456789012345678901234567890",
  url: "https://www.bbc.co.uk",
};

const subItem5: SubItem = {
  key: "subitem5",
  enabled: true,
  title: "Fifth option",
  description: "this is subitem description 5",
  url: "https://www.bbc.co.uk/sport",
};

const subItem6: SubItem = {
  key: "subitem6",
  enabled: true,
  title: "Sixth option",
  url: "https://www.bbc.co.uk/news",
};

const subItemList1: SubItem[] = [subItem1, subItem2, subItem3];
const subItemList2: SubItem[] = [subItem4, subItem5, subItem6];

const item1: Item = {
  key: "item1",
  enabled: true,
  title: "123456789012345",
  description: "123456789012345678901234567890",
  subItems: subItemList1,
};

const item2: Item = {
  key: "item2",
  enabled: true,
  title: "Second Top",
  subItems: subItemList2,
};

const item3: Item = {
  key: "item3",
  enabled: true,
  title: "Third Top",
  description: "not cool stuff",
  url: "https://www.bbc.co.uk/news",
};

export const itemList: Item[] = [item1, item2, item3];
