window.BUYER_GUIDE = {
  lang: "ru",
  author: "ray127polite1",
  authorLabel: "Автор",
  quickLinksTitle: "Быстрые переходы",
  pageTitle: "Инструкция по использованию API key",
  eyebrow: "Windows / macOS · API инструкция",
  title: "Инструкция по использованию API key",
  subtitle:
    "Пошаговая инструкция для подключения API key в Codex (ChatGPT) и Opencode на Windows и macOS. Codex (ChatGPT) - рекомендуемый вариант. Просто повторяйте шаги по порядку.",
  primaryAction: {
    label: "Начать настройку",
    href: "#codex",
  },
  secondaryActionLabel: "Открыть шаги",
  meta: [
    { label: "Подходит для", value: "Codex (ChatGPT) / Opencode" },
    { label: "Система", value: "Windows / macOS" },
    { label: "Бонус", value: "🎁 +1 млн токенов за отзыв" },
    { label: "Настройка", value: "5-10 минут" },
  ],
  sections: [
    {
      id: "intro",
      title: "Что понадобится",
      note: "Коротко перед началом настройки.",
      html:
        "<p>Для начала работы вам нужен выданный API key OpenAI.</p>" +
        "<p style=\"color:#dc2626;font-weight:700;\">Уважаемый покупатель, пожалуйста, подтвердите получение товара. За отзыв при покупке от 5 млн токенов я дополнительно пополню ваш ключ на 1 млн токенов.</p>",
    },
    {
      id: "codex",
      title: "Codex (ChatGPT) - рекомендуемый вариант",
      note: "Рекомендуемый способ настройки API key.",
      html:
        "<p><strong>1.</strong> Откройте Codex (ChatGPT) и авторизируйтесь с помощью API key. Ключ выглядит примерно так: <code>sk-........</code>. При авторизации вставляйте ключ полностью и без кавычек.</p>" +
        "<p><strong>2.</strong> Перейдите в папку <code>.codex</code>. На Windows нажмите <code>Win + R</code>, вставьте <code>%userprofile%\\.codex</code> и нажмите Enter. Если папка не открылась, сначала запустите Codex один раз, чтобы он создал папку автоматически.</p>" +
        "<p><strong>3.</strong> Найдите файл <code>config.toml</code> и откройте его в Блокноте. Если файла нет, создайте текстовый документ и переименуйте его в <code>config.toml</code>. Если Windows спросит про изменение расширения файла, подтвердите действие.</p>" +
        "<p>Удалите все содержимое файла <code>config.toml</code>, после чего вставьте туда эту конфигурацию:</p>" +
        "<pre><code>model = \"gpt-5.6-terra\"\nreview_model = \"gpt-5.6-terra\"\nmodel_reasoning_effort = \"xhigh\"\ndisable_response_storage = true\nnetwork_access = \"enabled\"\nwindows_wsl_setup_acknowledged = true\nplan_mode_reasoning_effort = \"xhigh\"\nmodel_provider = \"OpenAI\"\n\n[model_providers.OpenAI]\nname = \"OpenAI\"\nbase_url = \"https://byesu.com/v1\"\nwire_api = \"responses\"\nrequires_openai_auth = false</code></pre>" +
        "<p>Сохраните данную конфигурацию через <code>Ctrl + S</code> и закройте Блокнот.</p>" +
        "<p><strong>4.</strong> В этой же папке <code>.codex</code> откройте файл <code>auth.json</code>. Если файла нет, создайте текстовый документ и переименуйте его в <code>auth.json</code>. Если Windows спросит про изменение расширения файла, подтвердите действие.</p>" +
        "<p>Удалите все содержимое файла <code>auth.json</code> и вставьте туда этот текст:</p>" +
        "<pre><code>{\n  \"OPENAI_API_KEY\": \"ваш_aпи_ключ\",\n  \"auth_mode\": \"apikey\"\n}</code></pre>" +
        "<p>Замените <code>ваш_aпи_ключ</code> на свой API key. В этом файле кавычки вокруг ключа оставьте, потому что это JSON. После этого сохраните файл через <code>Ctrl + S</code> и закройте Блокнот.</p>" +
        "<p><strong>5.</strong> Полностью закройте Codex (ChatGPT) и откройте его заново. После перезапуска можно пользоваться программой с подключенным API key.</p>",
    },
    {
      id: "opencode",
      title: "Opencode",
      note: "Настройка API key для Opencode.",
      html:
        "<p>Путь к конфигурации: <code>~/.config/opencode/opencode.json</code> или <code>opencode.jsonc</code>. Если файла нет, создайте его вручную.</p>" +
        "<p>API key можно настроить напрямую или через команду <code>/connect</code>. Ниже пример готовой конфигурации. При необходимости можно изменить модели и параметры.</p>" +
        "<pre><code>{\n  \"provider\": {\n    \"openai\": {\n      \"options\": {\n        \"baseURL\": \"https://api.byesu.com/v1\",\n        \"apiKey\": \"ваш_апи_ключ\"\n      },\n      \"models\": {\n        \"gpt-5.2\": {\n          \"name\": \"GPT-5.2\",\n          \"limit\": {\n            \"context\": 400000,\n            \"output\": 128000\n          },\n          \"options\": {\n            \"store\": false\n          },\n          \"variants\": {\n            \"low\": {},\n            \"medium\": {},\n            \"high\": {},\n            \"xhigh\": {}\n          }\n        },\n        \"gpt-5.5\": {\n          \"name\": \"GPT-5.5\",\n          \"limit\": {\n            \"context\": 1050000,\n            \"output\": 128000\n          },\n          \"options\": {\n            \"store\": false\n          },\n          \"variants\": {\n            \"low\": {},\n            \"medium\": {},\n            \"high\": {},\n            \"xhigh\": {}\n          }\n        },\n        \"gpt-5.4\": {\n          \"name\": \"GPT-5.4\",\n          \"limit\": {\n            \"context\": 1050000,\n            \"output\": 128000\n          },\n          \"options\": {\n            \"store\": false\n          },\n          \"variants\": {\n            \"low\": {},\n            \"medium\": {},\n            \"high\": {},\n            \"xhigh\": {}\n          }\n        },\n        \"gpt-5.4-mini\": {\n          \"name\": \"GPT-5.4 Mini\",\n          \"limit\": {\n            \"context\": 400000,\n            \"output\": 128000\n          },\n          \"options\": {\n            \"store\": false\n          },\n          \"variants\": {\n            \"low\": {},\n            \"medium\": {},\n            \"high\": {},\n            \"xhigh\": {}\n          }\n        },\n        \"gpt-5.3-codex-spark\": {\n          \"name\": \"GPT-5.3 Codex Spark\",\n          \"limit\": {\n            \"context\": 128000,\n            \"output\": 32000\n          },\n          \"options\": {\n            \"store\": false\n          },\n          \"variants\": {\n            \"low\": {},\n            \"medium\": {},\n            \"high\": {},\n            \"xhigh\": {}\n          }\n        },\n        \"gpt-5.3-codex\": {\n          \"name\": \"GPT-5.3 Codex\",\n          \"limit\": {\n            \"context\": 400000,\n            \"output\": 128000\n          },\n          \"options\": {\n            \"store\": false\n          },\n          \"variants\": {\n            \"low\": {},\n            \"medium\": {},\n            \"high\": {},\n            \"xhigh\": {}\n          }\n        },\n        \"codex-mini-latest\": {\n          \"name\": \"Codex Mini\",\n          \"limit\": {\n            \"context\": 200000,\n            \"output\": 100000\n          },\n          \"options\": {\n            \"store\": false\n          },\n          \"variants\": {\n            \"low\": {},\n            \"medium\": {},\n            \"high\": {}\n          }\n        }\n      }\n    }\n  },\n  \"agent\": {\n    \"build\": {\n      \"options\": {\n        \"store\": false\n      }\n    },\n    \"plan\": {\n      \"options\": {\n        \"store\": false\n      }\n    }\n  },\n  \"$schema\": \"https://opencode.ai/config.json\"\n}</code></pre>",
    },
    {
      id: "finish",
      title: "После настройки",
      note: "Что делать дальше.",
      html:
        "<p>После сохранения конфигурации перезапустите программу и проверьте, что ключ вставлен без ошибок.</p>" +
        "<p>Если все сделано правильно, сервис начнет работать с вашим API key.</p>",
    },
    {
      id: "tips",
      title: "Если что-то не работает",
      note: "Самые частые причины ошибок.",
      html:
        "<ul>" +
        "<li>Проверьте, что ключ вставлен полностью.</li>" +
        "<li>Проверьте, что файл сохранен именно с нужным именем: <code>config.toml</code> или <code>auth.json</code>.</li>" +
        "<li>Убедитесь, что путь к папке указан правильно.</li>" +
        "<li>Проверьте, что в конфигурации нет лишних символов или случайных пробелов.</li>" +
        "<li>После изменения файлов перезапустите программу.</li>" +
        "</ul>",
    },
  ],
};

(() => {
  const findSection = (id) =>
    window.BUYER_GUIDE.sections.find((section) => section.id === id);
  const getCodeBlocks = (id) =>
    findSection(id).html.match(/<pre><code>[\s\S]*?<\/code><\/pre>/g) || [];
  const [codexConfig, authConfigRu] = getCodeBlocks("codex");
  const [opencodeConfigRu] = getCodeBlocks("opencode");
  const authConfig = authConfigRu.replace("ваш_aпи_ключ", "your_api_key");
  const opencodeConfig = opencodeConfigRu.replaceAll("ваш_апи_ключ", "your_api_key");

  window.BUYER_GUIDE_EN = {
    lang: "en",
    author: "ray127polite1",
    authorLabel: "Author",
    quickLinksTitle: "Quick navigation",
    pageTitle: "API key usage guide",
    eyebrow: "Windows / macOS · API guide",
    title: "API key usage guide",
    subtitle:
      "A step-by-step guide to connecting an API key in Codex (ChatGPT) and Opencode on Windows and macOS. Codex (ChatGPT) is the recommended option. Simply follow the steps in order.",
    primaryAction: {
      label: "Start setup",
      href: "#codex",
    },
    secondaryActionLabel: "View steps",
    meta: [
      { label: "Works with", value: "Codex (ChatGPT) / Opencode" },
      { label: "System", value: "Windows / macOS" },
      { label: "Bonus", value: "🎁 +1M tokens for a review" },
      { label: "Setup time", value: "5-10 minutes" },
    ],
    sections: [
      {
        id: "intro",
        title: "What you need",
        note: "A quick check before setup.",
        html:
          "<p>To get started, you need the OpenAI API key provided to you.</p>" +
          "<p style=\"color:#dc2626;font-weight:700;\">Dear customer, please confirm receipt of your purchase. If your purchase includes 5 million tokens or more, I will add another 1 million tokens to your key for leaving a review.</p>",
      },
      {
        id: "codex",
        title: "Codex (ChatGPT) - recommended option",
        note: "The recommended way to configure your API key.",
        html:
          "<p><strong>1.</strong> Open Codex (ChatGPT) and sign in with your API key. The key looks approximately like this: <code>sk-........</code>. During sign-in, paste the complete key without quotation marks.</p>" +
          "<p><strong>2.</strong> Open the <code>.codex</code> folder. On Windows, press <code>Win + R</code>, paste <code>%userprofile%\\.codex</code>, and press Enter. If the folder does not open, launch Codex once first so it can create the folder automatically.</p>" +
          "<p><strong>3.</strong> Find <code>config.toml</code> and open it in Notepad. If the file does not exist, create a text document and rename it to <code>config.toml</code>. If Windows asks you to confirm the file extension change, approve it.</p>" +
          "<p>Delete everything inside <code>config.toml</code>, then paste this configuration:</p>" +
          codexConfig +
          "<p>Press <code>Ctrl + S</code> to save the configuration, then close Notepad.</p>" +
          "<p><strong>4.</strong> In the same <code>.codex</code> folder, open <code>auth.json</code>. If the file does not exist, create a text document and rename it to <code>auth.json</code>. If Windows asks you to confirm the file extension change, approve it.</p>" +
          "<p>Delete everything inside <code>auth.json</code>, then paste this text:</p>" +
          authConfig +
          "<p>Replace <code>your_api_key</code> with your API key. Keep the quotation marks around the key because this file uses JSON format. Press <code>Ctrl + S</code> to save the file, then close Notepad.</p>" +
          "<p><strong>5.</strong> Fully close Codex (ChatGPT) and open it again. After restarting, you can use the application with your connected API key.</p>",
      },
      {
        id: "opencode",
        title: "Opencode",
        note: "API key setup for Opencode.",
        html:
          "<p>Configuration path: <code>~/.config/opencode/opencode.json</code> or <code>opencode.jsonc</code>. If the file does not exist, create it manually.</p>" +
          "<p>You can configure the API key directly or by using the <code>/connect</code> command. A ready-to-use configuration example is shown below. You can change the models and parameters if needed.</p>" +
          opencodeConfig,
      },
      {
        id: "finish",
        title: "After setup",
        note: "What to do next.",
        html:
          "<p>After saving the configuration, restart the application and make sure the key was entered correctly.</p>" +
          "<p>If everything is configured correctly, the service will start working with your API key.</p>",
      },
      {
        id: "tips",
        title: "If something does not work",
        note: "The most common causes of errors.",
        html:
          "<ul>" +
          "<li>Make sure the complete key was pasted.</li>" +
          "<li>Make sure the file was saved with the correct name: <code>config.toml</code> or <code>auth.json</code>.</li>" +
          "<li>Make sure you opened the correct folder.</li>" +
          "<li>Check that the configuration contains no extra characters or accidental spaces.</li>" +
          "<li>Restart the application after changing the files.</li>" +
          "</ul>",
      },
    ],
  };
})();
