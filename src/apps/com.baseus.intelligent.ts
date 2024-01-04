import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.baseus.intelligent',
  name: '倍思',
  groups: [
    {
      key: 1,
      name: '[ChangeMe]倍思开启定位权限',
      desc: '[ChangeMe]点击取消',
      rules: [
        {
          activityIds: 'com.baseus.intelligent.view.home.MainActivity',
          matches: '[id="com.baseus.intelligent:id/btn_2_cancel"]',
          exampleUrls: 'https://m.gkd.li/60054733/251c8347-e49b-4dba-852d-79484214ce2c',
          snapshotUrls: 'https://i.gkd.li/import/13827653',
        },
      ],
    },
  ],
}
{
  id: 'com.baseus.intelligent',
  name: '倍思',
  groups: [
    {
      key: 2,
      name: '[ChangeMe]倍思开启权限',
      desc: '[ChangeMe]点击取消',
      rules: [
        {
          activityIds: 'com.baseus.intelligent.view.home.MainActivity',
          matches: '[id="com.baseus.intelligent:id/tv_cancel"]',
          exampleUrls: 'https://m.gkd.li/60054733/deda3eb0-f26f-4ac1-b7ef-6d1b50790cc1',
          snapshotUrls: 'https://i.gkd.li/import/13827671',
        },
      ],
    },
  ],
}
