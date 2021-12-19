import baseSlugify from "slugify";

const corrections = [
  { from: /’/g, to: " ’ " },
  { from: /'/g, to: " ' " },
];

const getCorrectedTitle = (title) => {
  return corrections.reduce((correctedTitle, correction) => {
    return correctedTitle.replace(correction.from, correction.to);
  }, title);
};

const slugify = (title) => {
  return baseSlugify(getCorrectedTitle(title), {
    lower: true,
    remove: /[*+~.()'"’,!?:@]/g,
  });
};

export default slugify;
