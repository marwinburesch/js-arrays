function valueMatchesSearchString(value, searchString) {
  const convertedValue = value.toString().toLowerCase();
  const lowerCaseSearchString = searchString.toLowerCase();
  return convertedValue.includes(lowerCaseSearchString);
}

export default valueMatchesSearchString;
