const getHomePageFeatureFlags = <TConfig extends { rawConfig: { featureFlags: { homePage: any } } }> (
  config: TConfig,
  override: (flags: TConfig['rawConfig']['featureFlags']['homePage']) => TConfig['rawConfig']['featureFlags']['homePage']
) => {
  return override(config.rawConfig.featureFlags.homePage);
};

const getHomePageFeatureFlags1 = <HomePageFlags> (
  config: {
    rawConfig: {
      featureFlags: {
        homePage: HomePageFlags
      }
    }
  },
  override: (flags: HomePageFlags) => HomePageFlags
) => {
  return override(config.rawConfig.featureFlags.homePage);
};

const result = getHomePageFeatureFlags({ rawConfig: { featureFlags: { homePage: { showBanner: true } } } }, (flags) => flags);
const result1 = getHomePageFeatureFlags1({ rawConfig: { featureFlags: { homePage: { showBanner: true } } } }, (flags) => flags);
