import { createMenuConfig } from '🍎/helpers/create-menu-config';

export const finderMenuConfig = createMenuConfig({
  default: {
    title: '访达',
    menu: {
      'about-finder': {
        title: '关于访达',
        breakAfter: true,
      },
      preferences: {
        title: '设置',
        breakAfter: true,
      },
      'empty-trash': {
        title: '清倒废纸篓',
        breakAfter: true,
      },
      'hide-finder': {
        title: '隐藏访达',
      },
      'hide-others': {
        title: '隐藏其他',
      },
      'show-all': {
        title: '全部显示',
        disabled: true,
      },
    },
  },

  file: {
    title: '文件',
    menu: {
      'new-finder-window': {
        title: '新建“访达”窗口',
      },
      'new-folder': {
        title: '新建文件夹',
      },
      'new-folder-with-selection': {
        title: '用所选项目新建文件夹',
        disabled: true,
      },
      'new-smart-folder': {
        title: '新建智能文件夹',
      },
      'new-tab': {
        title: '新建标签页',
      },
      open: {
        title: '打开',
        disabled: true,
      },
      'open-with': {
        title: '打开方式>',
        disabled: true,
      },
      print: {
        title: '打印',
        disabled: true,
      },
      'close-window': {
        title: '关闭窗口',
        disabled: true,
        breakAfter: true,
      },

      'get-info': {
        title: 'G显示简介',
      },
      rename: {
        title: '重命名',
        disabled: true,
        breakAfter: true,
      },

      compress: {
        title: '压缩',
        disabled: true,
        breakAfter: true,
      },

      duplicate: {
        title: '拷贝',
        disabled: true,
      },
      'make-alias': {
        title: '制作分身',
        disabled: true,
      },
      'quick-look': {
        title: '快速查看',
        disabled: true,
      },
      'show-original': {
        title: '显示原项目',
        disabled: true,
      },
      'add-to-sidebar': {
        title: '添加到边栏',
        disabled: true,
        breakAfter: true,
      },

      'move-to-trash': {
        title: '移动到废纸篓',
        disabled: true,
      },
      eject: {
        title: '推出',
        disabled: true,
        breakAfter: true,
      },

      find: {
        title: '查找',
        breakAfter: true,
      },

      tags: {
        title: '标签...',
        disabled: true,
      },
    },
  },

  edit: {
    title: '编辑',
    menu: {
      undo: {
        title: '撤销',
        disabled: true,
      },
      redo: {
        title: '重做',
        disabled: true,
        breakAfter: true,
      },

      cut: {
        title: '剪切',
        disabled: true,
      },
      copy: {
        title: '拷贝',
        disabled: true,
      },
      paste: {
        title: '粘贴',
        disabled: true,
      },
      'select-all': {
        title: '全选',
        disabled: true,
        breakAfter: true,
      },

      'show-clipboard': {
        title: '显示剪切板',
        breakAfter: true,
      },

      'start-dictation': {
        title: '开始听写...',
      },
      'emoji-and-symbols': {
        title: '表情与符号',
      },
    },
  },

  view: {
    title: '显示',
    menu: {
      'as-icons': {
        title: '为图标',
        disabled: true,
      },
      'as-list': {
        title: '为列表',
        disabled: true,
      },
      'as-columns': {
        title: '为分栏',
        disabled: true,
      },
      'as-gallery': {
        title: '为画廊',
        disabled: true,
        breakAfter: true,
      },

      'use-stacks': {
        title: '使用叠放',
      },
      'sort-by': {
        title: '排序方式>',
        menu: {},
      },
      'clean-up': {
        title: '整理',
        disabled: true,
      },
      'clean-up-by': {
        title: '整理方式>',
        disabled: true,
        breakAfter: true,
        menu: {},
      },

      'hide-sidebar': {
        title: '隐藏边栏',
        disabled: true,
      },
      'show-preview': {
        title: '隐藏预览',
        disabled: true,
        breakAfter: true,
      },

      'hide-toolbar': {
        title: '隐藏工具栏',
        disabled: true,
      },
      'show-all-tabs': {
        title: '显示所有标签页',
        disabled: true,
      },
      'show-tab-bar': {
        title: '隐藏标签页栏',
        disabled: true,
      },
      'show-path-bar': {
        title: '隐藏路径栏',
        disabled: true,
      },
      'show-status-bar': {
        title: '隐藏状态栏',
        disabled: true,
        breakAfter: true,
      },

      'customize-toolbar': {
        title: '自定义工具栏...',
        disabled: true,
        breakAfter: true,
      },

      'show-view-options': {
        title: '查看显示选项',
      },
      'show-preview-options': {
        title: '显示预览选项',
        disabled: true,
        breakAfter: true,
      },

      'enter-full-screen': {
        title: '进入全屏幕',
        disabled: true,
      },
    },
  },

  go: {
    title: '前往',
    menu: {
      back: {
        title: '返回',
        disabled: true,
      },
      forward: {
        title: '前进',
        disabled: true,
      },
      'enclosing-folder': {
        title: '上层文件夹',
        breakAfter: true,
      },

      recents: {
        title: '🕝最近使用',
      },
      documents: {
        title: '📃文稿',
      },
      desktop: {
        title: '💳桌面',
      },
      downloads: {
        title: '⏬下载',
      },
      home: {
        title: '🏠个人',
      },
      computer: {
        title: '💻电脑',
      },
      airdrop: {
        title: '🛫隔空投送',
      },
      network: {
        title: '🌐网络',
      },
      'icloud-drive': {
        title: '☁️iCloud云盘',
      },
      applications: {
        title: '📦应用程序',
      },
      utilities: {
        title: '🔧实用工具',
        breakAfter: true,
      },

      'go-to-folder': {
        title: '前往文件夹....',
      },
      'connect-to-server': {
        title: '连接服务器....',
      },
    },
  },

  window: {
    title: '窗口',
    menu: {
      minimize: {
        title: '最小化',
        disabled: true,
      },
      zoom: {
        title: '缩放',
        disabled: true,
      },
      'move-window-to-left-side-of-screen': {
        title: '将窗口移动到屏幕左侧',
        disabled: true,
      },
      'move-window-to-right-side-of-screen': {
        title: '将窗口移动到屏幕右侧',
        disabled: true,
      },
      'cycle-through-windows': {
        title: '替换拼贴窗口',
        breakAfter: true,
      },

      'show-previous-tab': {
        title: '显示进度窗口',
        disabled: true,
      },
      'show-next-tab': {
        title: '显示下一个标签页',
        disabled: true,
      },
      'move-tab-to-new-window': {
        title: '将标签页移动到新窗口',
        disabled: true,
      },
      'merge-all-windows': {
        title: '合并所有窗口',
        disabled: true,
        breakAfter: true,
      },

      'bring-all-to-front': {
        title: '前置全部窗口',
      },
    },
  },

  help: {
    title: '帮助',
    menu: {
      'send-finder-feedback': {
        title: 'mac使用技巧',
        breakAfter: true,
      },
      'macos-help': {
        title: 'macOS帮助',
      },
    },
  },
});
