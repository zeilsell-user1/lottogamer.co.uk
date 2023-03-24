import myConfiguredSanityClient from "./sanity-client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(myConfiguredSanityClient);

export const getImageUrl = (
  reference: string,
  width?: number,
  height?: number
): string => {
  width ? width : (width = 500);
  height ? height : (height = 500);

  return builder
    .image(reference)
    .width(width)
    .height(height)
    .format("png")
    .url()
    .toString();
};
