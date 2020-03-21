export class TreeMap<K, V> extends Map {
  constructor() {
    super();
  }

  getAllSorted(): Map<K, V> {
    const sortedKeys = [...this.keys()].sort(this.compare);
    const sortedMap = new Map<K, V>()
    sortedKeys.forEach(key => sortedMap.set(key, this.get(key)));

    return sortedMap;
  }

  private compare(a: number, b: number): number {
    return a - b;
  }
}
