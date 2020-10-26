const lineUrl = 'http://lin.ee/tfKv3EW'
const formUrl = 'https://forms.gle/DRNAjj2rjZhJd3ok9'

export const defaultDataset = {
  init: {
    answers: [
      { content: 'Pro-Kのチームについて知りたい！', nextId: 'teams' },
      { content: 'Pro-Kに入部したい！', nextId: 'join' },
      {
        content: 'Pro-Kがやってるイベントについて知りたい！',
        nextId: 'event',
      },
      {
        content: '一橋の履修に関して教えてほしい！',
        nextId: 'course_consultation',
      },
    ],
    question: 'こんにちは！Pro-K新歓担当へのご質問はなんでしょうか？',
  },

  //ここからチーム紹介
  teams: {
    answers: [
      { content: '商店街協同', nextId: 'shokyo' },
      { content: 'まちかど', nextId: 'machikado' },
      {
        content: 'ここたの',
        nextId: 'kokotano',
      },
      {
        content: 'とれたの',
        nextId: 'toretano',
      },
      {
        content: 'ゆーから',
        nextId: 'yukara',
      },
    ],
    question: 'どのチームについて知りたいですか？',
  },
  shokyo: {
    answers: [
      {
        content: '活動について詳しく！',
        nextId: 'https://note.com/yahhoh_digital/n/nbc03e708d8e3',
      },
      {
        content: 'メンバーのことが知りたい！',
        nextId:
          'https://www.notion.so/prokers/dummy-0d17462ed52a47b992fb28d0f39a8d1c',
      },
      { content: '前の質問に戻る', nextId: 'teams' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'どんなことが知りたいですか？',
  },
  machikado: {
    answers: [
      {
        content: '活動について詳しく！',
        nextId: 'https://note.com/yahhoh_digital/n/n2c34f6027f2c',
      },
      {
        content: 'メンバーのことが知りたい！',
        nextId:
          'https://www.notion.so/prokers/dummy-0d17462ed52a47b992fb28d0f39a8d1c',
      },
      { content: '前の質問に戻る', nextId: 'teams' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'どんなことが知りたいですか？',
  },
  kokotano: {
    answers: [
      {
        content: '活動について詳しく！',
        nextId: 'https://note.com/yahhoh_digital/n/na16c6c73d87a',
      },
      {
        content: 'メンバーのことが知りたい！',
        nextId:
          'https://www.notion.so/prokers/dummy-0d17462ed52a47b992fb28d0f39a8d1c',
      },
      { content: '前の質問に戻る', nextId: 'teams' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'どんなことが知りたいですか？',
  },
  toretano: {
    answers: [
      {
        content: '活動について詳しく！',
        nextId: 'https://note.com/yahhoh_digital/n/n6afeeceb5d99',
      },
      {
        content: 'メンバーのことが知りたい！',
        nextId:
          'https://www.notion.so/prokers/dummy-0d17462ed52a47b992fb28d0f39a8d1c',
      },
      { content: '前の質問に戻る', nextId: 'teams' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'どんなことが知りたいですか？',
  },
  yukara: {
    answers: [
      {
        content: '活動について詳しく！',
        nextId: 'https://note.com/yahhoh_digital/n/n776fc44e4b1e',
      },
      {
        content: 'メンバーのことが知りたい！',
        nextId:
          'https://www.notion.so/prokers/dummy-0d17462ed52a47b992fb28d0f39a8d1c',
      },
      { content: '前の質問に戻る', nextId: 'teams' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'どんなことが知りたいですか？',
  },
  //ここまでチーム紹介

  //ここから履修相談
  course_consultation: {
    answers: [
      { content: '経済学部', nextId: 'economics' },
      { content: '商学部', nextId: 'commerce' },
      { content: '法学部', nextId: 'law' },
      { content: '社会学部', nextId: 'sociology' },
    ],
    question: '学部はどこですか？',
  },

  economics: {
    answers: [
      { content: '経済学部のPro-Kerと連絡を取りたい！', nextId: 'contact' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: '経済学部ですね。こちらのnoteをお読みください！',
  },
  commerce: {
    answers: [
      { content: '商学部のPro-Kerと連絡を取りたい!', nextId: 'contact' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: '商学部ですね。こちらのnoteをお読みください！',
  },
  law: {
    answers: [
      { content: '法学部のPro-Kerと連絡を取りたい！', nextId: 'contact' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: '法学部ですね。こちらのnoteをお読みください！',
  },
  sociology: {
    answers: [
      { content: '社会学部のPro-Kerと連絡を取りたい！', nextId: 'contact' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: '社会学部ですね。こちらのnoteをお読みください！',
  },
  // ここまで履修相談

  // ここからイベント説明
  event: {
    answers: [
      {
        content: 'ハロウィン',
        nextId: 'https://note.com/yahhoh_digital/n/nd09459a7e6be',
      },
      {
        content: '天下市',
        nextId: 'https://note.com/yahhoh_digital/n/n94948c50f360',
      },
      { content: '最新の新歓イベント', nextId: 'welcome' },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: 'どのイベントに興味ありですか？',
  },
  welcome: {
    answers: [
      {
        content: 'このページから問い合わせる',
        nextId: 'contact',
      },
      {
        content: '入部に関して詳しく知りたい',
        nextId: 'join',
      },
      { content: '最初の質問に戻る', nextId: 'init' },
    ],
    question: '公式ラインやTwitterのDMまでお問い合わせください！',
  },
  // ここまでイベント説明

  //ここから入部説明
  join: {
    answers: [
      { content: '参加した！', nextId: 'meeting' },
      { content: 'まだ！', nextId: 'init' },
    ],
    question: '本当ですか！嬉しい！ちなみに、説明会には参加してくれました？？',
  },
  meeting: {
    answers: [
      { content: '2チーム以上参加した！', nextId: 'form' },
      { content: 'まだ！ or 1チームだけ！', nextId: 'official_line' },
    ],
    question: `え！本当に！！♡♡\nチームミーティングの方はどうですか？？`,
  },
  form: {
    answers: [{ content: '最初の質問に戻る', nextId: 'init' }],
    question: `素晴らしい！！ぜひこちらのFormから入部申請をお願いします！\n${formUrl}`,
  },
  official_line: {
    answers: [{ content: '最初の質問に戻る', nextId: 'init' }],
    question: `わかりました！ありがとう！公式ラインの方で説明会/ミーテ参加のお問い合わせをお願いします！\n${lineUrl}`,
  },
  //ここまで入部申請
}
