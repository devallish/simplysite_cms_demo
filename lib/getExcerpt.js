import * as prismicH from "@prismicio/helpers";

export const getExcerpt = (slices) => {
  const firstSlice = slices
    .filter((slice) => slice.slice_type === "text")[0];
    // .map((slice) => prismicH.asText(slice.primary.text))
    // .join(" ");
  const text = prismicH.asText(firstSlice.primary.text);
  
  const excerpt = text.substring(0, 300);

  if (text.length > 300) {
    return excerpt.substring(0, excerpt.lastIndexOf(" ")) + "…";
  } else {
    return excerpt;
  }
};
