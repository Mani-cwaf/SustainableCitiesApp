module.exports = {
  packagerConfig: {
    icon: '/src/assets/icon'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        setupIcon: 'src/assets/icon.ico',
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: 'src/assets/icon.ico',
        },
      },
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    }
  ],
  packagerConfig: {
    icon: 'src/assets/icon',
  }
};
