import Api from './api';

async function main() {
  const api = new Api();

  const appNames = await api.fetchAppNames();
  for (const appName of appNames) {
    const version = await api.fetchAppVersion(appName);
    console.log(`${appName}: ${version}`);
  }
}

main();
main();
main();
main();
main();
main();
main();
main();
main();
main();
main();
