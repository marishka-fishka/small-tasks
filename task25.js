// Sort the given array of strings in alphabetical order, case insensitive

sortme = function( names ){
    names.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
  })
  return names;};