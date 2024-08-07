function swapStrings(strings) {
    return strings.map((string) =>
      string.length > 1
        ? string[string.length - 1] + string.slice(1, -1) + string[0]
        : string
    );
  }
  
  const stringsSwap = [
    "Hello",
    "world",
    "this",
    "is",
    "an",
    "example",
    "array",
    "of",
    "strings",
  ];
  console.log(swapStrings(stringsSwap)); // Output: ["oellH", "dorlw", "shit", "si", "na", "example", "yrraa", "fo", "strings"]
  