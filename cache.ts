export default class Cacher {
  private cache: { [key: string]: any } = {};

  async getOrFetch<V>(key: string, fetchFn: () => Promise<V>): Promise<V> {
    console.log("### getOrFetch", key);
    if (Object.keys(this.cache).includes(key)) {
      return this.cache[key];
    } else {
      const value = await fetchFn();
      this.setValue(key, value);
      return value;
    }
  }

  setValue(key: string, value: any) {
    this.cache[key] = value;
  }

  remove(key: string): void {
    delete this.cache[key];
  }
}
