import { createAppConfig } from '🍎/helpers/create-app-config';

const wallpapers = createAppConfig({
  title: '壁纸',
  resizable: true,

  height: 600,
  width: 800,

  dockBreaksBefore: true,
});

const calculator = createAppConfig({
  title: '计算器',

  expandable: true,
  resizable: false,

  height: 300 * 1.414,
  width: 300,
});

const calendar = createAppConfig({
  title: '日历',
  resizable: true,
});

const vscode = createAppConfig({
  title: 'VSCode',
  resizable: true,

  height: 600,
  width: 800,
});

const terminal = createAppConfig({
  title: 'Terminal',
  resizable: true,

  height: 600,
  width: 800,
});

const finder = createAppConfig({
  title: '访达',
  resizable: true,

  // dockBreaksBefore: true,
  shouldOpenWindow: false,
});

const safari = createAppConfig({
  title: 'Safari',
  resizable: true,

  width: 800,
  height: 600,
});

const systemPreferences = createAppConfig({
  title: '系统设置',
  resizable: true,
});

const purusTwitter = createAppConfig({
  title: `👻`,
  resizable: true,

  dockBreaksBefore: true,

  height: 600,
  width: 800,
});

const viewSource = createAppConfig({
  title: `Github`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://github.com/Ptsuki', '_blank'),
});

const ukraine = createAppConfig({
  title: `Welcome🥤`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://o-x.icu', '_blank'),

  dockBreaksBefore: true,
});

const vercel = createAppConfig({
  title: `Blog`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () =>
    window.open('https://blog.o-x.icu', '_blank'),

  dockBreaksBefore: true,
});

const appstore = createAppConfig({
  title: 'App Store',
  resizable: true,
});

export const appsConfig = {
  finder,
  safari,
  calculator,
  calendar,
  'view-source': viewSource,
  vscode,
  terminal,
  wallpapers,
  appstore,

  'purus-twitter': purusTwitter,

  vercel,

  ukraine,
};
