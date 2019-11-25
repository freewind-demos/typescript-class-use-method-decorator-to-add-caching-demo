import cache from './cacheDecorator';

export default class Api {

  @cache()
  async fetchAppNames() {
    console.log('> fetchAppNames')
    return ['app1', 'app2']
  }

  @cache()
  async fetchAppVersion(appName: string): Promise<number | undefined> {
    console.log('> fetchAppVersion', appName);
    if (appName === 'app1') {
      return 111;
    } else if (appName === 'app2') {
      return 222;
    } else {
      return undefined;
    }
  }
}
