export function buildClass(...classes: string[]): string {
  return classes.reduce((className, name) => {
    if (name) {
      return className.concat(" ", name);
    }

    return className;
  }, "");
}
