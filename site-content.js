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

(() => {
  const sourceLink = "https://docs.byesu.com/ru/clients";
  const groupLabels = {
    ru: {
      code: "Клиенты для кода",
      desktop: "Десктоп-клиенты",
      bots: "Чат-боты",
      translation: "Перевод",
    },
    en: {
      code: "Coding clients",
      desktop: "Desktop clients",
      bots: "Chat bots",
      translation: "Translation",
    },
  };

  const clients = [
    {
      group: "code",
      name: "CC Switch",
      levelRu: "Средний · подключение в один клик",
      levelEn: "Intermediate · one-click import",
      format: "Claude / Anthropic",
      baseUrl: "https://byesu.com",
      model: "claude-opus-4-8",
      textRu: "Импортируйте поставщика Byesu из консоли или добавьте его вручную в категории Claude. После переключения поставщика перезапустите терминал.",
      textEn: "Import the Byesu provider from the console or add it manually in the Claude category. Restart the terminal after switching providers.",
      docs: "https://docs.byesu.com/ru/clients/cc-switch",
    },
    {
      group: "code",
      name: "Codex CLI / Codex App",
      levelRu: "Рекомендуемый вариант",
      levelEn: "Recommended option",
      format: "OpenAI / Responses",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.6-terra",
      textRu: "Используйте отдельный раздел Codex на этом сайте. Текущая подробная инструкция сохранена без изменений.",
      textEn: "Use the dedicated Codex section on this website. The existing detailed setup guide has been kept unchanged.",
      docs: "https://docs.byesu.com/ru/clients/codex-cli",
    },
    {
      group: "code",
      name: "Claude Code CLI",
      levelRu: "Продвинутый · терминал",
      levelEn: "Advanced · terminal",
      format: "Claude / Anthropic",
      baseUrl: "https://byesu.com",
      model: "claude-opus-4-8",
      textRu: "Укажите ANTHROPIC_BASE_URL и ANTHROPIC_API_KEY. Для модели по умолчанию можно добавить ANTHROPIC_MODEL.",
      textEn: "Set ANTHROPIC_BASE_URL and ANTHROPIC_API_KEY. You can also set ANTHROPIC_MODEL for the default model.",
      docs: "https://docs.byesu.com/ru/clients/claude-cli",
    },
    {
      group: "code",
      name: "OpenCode",
      levelRu: "Средний · JSON-конфигурация",
      levelEn: "Intermediate · JSON configuration",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "byesu/claude-opus-4-8",
      textRu: "Добавьте Byesu как кастомного провайдера через @ai-sdk/openai-compatible в глобальном или проектном opencode.json.",
      textEn: "Add Byesu as a custom provider through @ai-sdk/openai-compatible in the global or project opencode.json file.",
      docs: "https://docs.byesu.com/ru/clients/opencode",
    },
    {
      group: "code",
      name: "Roo Code",
      levelRu: "Средний · расширение VS Code",
      levelEn: "Intermediate · VS Code extension",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.6-terra",
      textRu: "В API Provider выберите OpenAI Compatible и заполните Base URL, API Key и точное имя модели.",
      textEn: "Choose OpenAI Compatible as the API provider, then enter the Base URL, API key, and exact model name.",
      docs: "https://docs.byesu.com/ru/clients/roo-code",
    },
    {
      group: "code",
      name: "Factory Droid CLI",
      levelRu: "Продвинутый · терминал",
      levelEn: "Advanced · terminal",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.6-terra",
      textRu: "Добавьте модели Byesu в custom_models файла ~/.factory/config.json либо используйте скрипт настройки.",
      textEn: "Add Byesu models to custom_models in ~/.factory/config.json or use the setup script.",
      docs: "https://docs.byesu.com/ru/clients/factory-droid-cli",
    },
    {
      group: "desktop",
      name: "Cherry Studio",
      levelRu: "Просто · без кода",
      levelEn: "Easy · no code",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com",
      model: "gpt-5.6-terra",
      textRu: "Добавьте поставщика OpenAI и проверьте, что итоговый адрес запроса заканчивается на /v1/chat/completions. Если получилось /v1/v1, уберите лишний /v1 из API Host.",
      textEn: "Add an OpenAI provider and verify that the final request URL ends in /v1/chat/completions. If it contains /v1/v1, remove the extra /v1 from API Host.",
      docs: "https://docs.byesu.com/ru/clients/cherry-studio",
    },
    {
      group: "desktop",
      name: "DeepChat",
      levelRu: "Средний · графический интерфейс",
      levelEn: "Intermediate · graphical interface",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.6-terra",
      textRu: "Создайте поставщика типа OpenAI Compatible, включите его и добавьте нужные модели вручную или загрузите список моделей.",
      textEn: "Create an OpenAI Compatible provider, enable it, and add the required models manually or fetch the model list.",
      docs: "https://docs.byesu.com/ru/clients/deepchat",
    },
    {
      group: "desktop",
      name: "AionUi",
      levelRu: "Средний · несколько агентов",
      levelEn: "Intermediate · multiple agents",
      format: "OpenAI-compatible / Claude",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.6-terra",
      textRu: "Для обычных моделей выберите NewAPI/OpenAI Compatible и адрес с /v1. Агент Claude Code настраивается отдельно через https://byesu.com без /v1.",
      textEn: "For regular models choose NewAPI/OpenAI Compatible and use the /v1 URL. Configure the Claude Code agent separately with https://byesu.com without /v1.",
      docs: "https://docs.byesu.com/ru/clients/aionui",
    },
    {
      group: "desktop",
      name: "Codex App",
      levelRu: "Просто · графический интерфейс",
      levelEn: "Easy · graphical interface",
      format: "OpenAI / Responses",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.6-terra",
      textRu: "Используйте подробную инструкцию Codex на этом сайте. В документации Byesu отдельная иллюстрированная страница пока находится в разработке.",
      textEn: "Use the detailed Codex guide on this website. The separate illustrated Byesu page is still under development.",
      docs: "https://docs.byesu.com/ru/clients/codex-app",
    },
    {
      group: "desktop",
      name: "Claude Desktop",
      levelRu: "Прямое подключение ограничено",
      levelEn: "Direct connection is limited",
      format: "Claude / Anthropic",
      baseUrl: "—",
      model: "claude-opus-4-8",
      textRu: "Официальный Claude Desktop может не поддерживать замену адреса API. Вместо него используйте Claude Code CLI, Cherry Studio или другой совместимый клиент.",
      textEn: "The official Claude Desktop app may not support a custom API URL. Use Claude Code CLI, Cherry Studio, or another compatible client instead.",
      docs: "https://docs.byesu.com/ru/clients/claude-desktop",
    },
    {
      group: "bots",
      name: "AstrBot",
      levelRu: "Продвинутый · панель управления",
      levelEn: "Advanced · control panel",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.6-terra",
      textRu: "В разделе Provider создайте поставщика OpenAI, затем выберите его как модель чата по умолчанию.",
      textEn: "Create an OpenAI provider in the Provider section, then select it as the default chat model.",
      docs: "https://docs.byesu.com/ru/clients/astrbot",
    },
    {
      group: "bots",
      name: "LangBot",
      levelRu: "Средний · панель управления",
      levelEn: "Intermediate · control panel",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.6-terra",
      textRu: "Добавьте модель типа NewAPI/OpenAI Compatible, затем выберите её в узле диалога Pipeline.",
      textEn: "Add a NewAPI/OpenAI Compatible model, then select it in the Pipeline conversation node.",
      docs: "https://docs.byesu.com/ru/clients/langbot",
    },
    {
      group: "bots",
      name: "Memoh",
      levelRu: "Продвинутый · самостоятельный хостинг",
      levelEn: "Advanced · self-hosted",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "claude-opus-4-8",
      textRu: "Создайте поставщика, импортируйте его модели и назначьте одну из них моделью диалога нужного бота.",
      textEn: "Create a provider, import its models, and assign one of them as the conversation model for the required bot.",
      docs: "https://docs.byesu.com/ru/clients/memoh",
    },
    {
      group: "bots",
      name: "OpenClaw",
      levelRu: "Продвинутый · мастер или JSON5",
      levelEn: "Advanced · wizard or JSON5",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.6-terra",
      textRu: "Запустите openclaw onboard и выберите Custom OpenAI-compatible endpoint либо добавьте поставщика в ~/.openclaw/openclaw.json.",
      textEn: "Run openclaw onboard and choose a Custom OpenAI-compatible endpoint, or add the provider to ~/.openclaw/openclaw.json.",
      docs: "https://docs.byesu.com/ru/clients/openclaw",
    },
    {
      group: "bots",
      name: "Hermes",
      levelRu: "Продвинутый · мастер или YAML",
      levelEn: "Advanced · wizard or YAML",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.6-terra",
      textRu: "Запустите hermes model и выберите Custom OpenAI-compatible endpoint либо измените секцию model в ~/.hermes/config.yaml.",
      textEn: "Run hermes model and choose a Custom OpenAI-compatible endpoint, or edit the model section in ~/.hermes/config.yaml.",
      docs: "https://docs.byesu.com/ru/clients/hermes",
    },
    {
      group: "translation",
      name: "Fluent Read",
      levelRu: "Просто · расширение браузера",
      levelEn: "Easy · browser extension",
      format: "NewAPI",
      baseUrl: "https://byesu.com",
      model: "gpt-5.6-luna",
      textRu: "Выберите встроенный движок NewAPI. В этом режиме адрес указывается без /v1, потому что расширение дополняет путь самостоятельно.",
      textEn: "Choose the built-in NewAPI engine. In this mode, enter the URL without /v1 because the extension appends the path automatically.",
      docs: "https://docs.byesu.com/ru/clients/fluent-read",
    },
    {
      group: "translation",
      name: "Luna Translator",
      levelRu: "Средний · импорт или ручная настройка",
      levelEn: "Intermediate · import or manual setup",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.6-luna",
      textRu: "Импортируйте конфигурацию из панели Byesu либо создайте универсальный интерфейс больших моделей и заполните URL, ключ и модель.",
      textEn: "Import the configuration from the Byesu console or create a universal LLM interface and enter the URL, key, and model.",
      docs: "https://docs.byesu.com/ru/clients/luna-translator",
    },
  ];

  const models = [
    ["gpt-5.6-sol", "OpenAI", "Самые сложные рассуждения и архитектура", "Deep reasoning and architecture", "OpenAI GPT", "https://docs.byesu.com/ru/models/gpt-5-6"],
    ["gpt-5.6-terra", "OpenAI", "Сбалансированный вариант для кода и ежедневной работы", "Balanced choice for coding and daily work", "OpenAI GPT", "https://docs.byesu.com/ru/models/gpt-5-6"],
    ["gpt-5.6-luna", "OpenAI", "Быстрые ответы, массовые задачи и перевод", "Fast responses, batch tasks, and translation", "OpenAI GPT", "https://docs.byesu.com/ru/models/gpt-5-6"],
    ["grok-4.5", "xAI", "Программирование, агенты и длинные циклы работы", "Coding, agents, and long-running workflows", "Grok", "https://docs.byesu.com/ru/models/grok-4-5"],
    ["claude-opus-4-8", "Anthropic", "Сложный код, рефакторинг и глубокий анализ", "Complex coding, refactoring, and deep analysis", "Claude", "https://docs.byesu.com/ru/models/claude-opus-4-8"],
    ["claude-sonnet-5", "Anthropic", "Повседневное программирование и агенты", "Everyday coding and agents", "Claude", "https://docs.byesu.com/ru/models/claude-sonnet-5"],
    ["gpt-5.5", "OpenAI", "Универсальные задачи и Responses API", "General tasks and Responses API", "OpenAI GPT", "https://docs.byesu.com/ru/models/gpt-5-5"],
    ["gemini-3.1-pro-high", "Google", "Длинные тексты и мультимодальные задачи", "Long documents and multimodal tasks", "Gemini", "https://docs.byesu.com/ru/guide/quickstart"],
    ["grok-420-fast", "xAI", "Высокая скорость и задачи реального времени", "High speed and real-time tasks", "Grok", "https://docs.byesu.com/ru/guide/quickstart"],
    ["a/glm-5.2", "Zhipu GLM", "Экономичный универсальный вариант", "Cost-effective general-purpose option", "GLM", "https://docs.byesu.com/ru/guide/quickstart"],
    ["gpt-image-2", "OpenAI · Media", "Генерация и редактирование изображений", "Image generation and editing", "media / media-gen", "https://docs.byesu.com/ru/models/gpt-image-2"],
    ["nano-banana-2", "Google · Media", "Изображения и композиция из нескольких референсов", "Images and multi-reference composition", "media / media-gen", "https://docs.byesu.com/ru/models/nano-banana"],
    ["seedream-4.5", "ByteDance · Media", "Постеры, e-commerce и изображения 2K/4K", "Posters, e-commerce, and 2K/4K images", "media / media-gen", "https://docs.byesu.com/ru/models/seedream-4-5"],
    ["gemini-veo31", "Google · Video", "Генерация видео из текста или изображения", "Text-to-video and image-to-video generation", "media / media-gen", "https://docs.byesu.com/ru/models/veo-3-1"],
  ];

  function clientCatalog(lang) {
    const learnMore = lang === "ru" ? "Подробная инструкция" : "Full guide";
    return Object.keys(groupLabels[lang])
      .map((group) => {
        const cards = clients
          .filter((client) => client.group === group)
          .map(
            (client) =>
              `<details class="catalog-card"><summary><span><strong>${client.name}</strong><small>${lang === "ru" ? client.levelRu : client.levelEn}</small></span><span class="catalog-arrow">+</span></summary><div class="catalog-card-body"><div class="connection-facts"><span><b>API</b>${client.format}</span><span><b>Base URL</b><code>${client.baseUrl}</code></span><span><b>Model</b><code>${client.model}</code></span></div><p>${lang === "ru" ? client.textRu : client.textEn}</p><a class="docs-link" href="${client.docs}" target="_blank" rel="noreferrer">${learnMore} ↗</a></div></details>`,
          )
          .join("");
        return `<div class="catalog-group"><h3>${groupLabels[lang][group]}</h3><div class="catalog-grid">${cards}</div></div>`;
      })
      .join("");
  }

  function modelCatalog(lang) {
    const useLabel = lang === "ru" ? "Для чего" : "Best for";
    const groupLabel = lang === "ru" ? "Группа токена" : "Token group";
    const docsLabel = lang === "ru" ? "Описание модели" : "Model details";
    return `<div class="model-grid">${models
      .map(
        (model) =>
          `<article class="model-card"><div class="model-card-top"><code>${model[0]}</code><span>${model[1]}</span></div><p><b>${useLabel}:</b> ${lang === "ru" ? model[2] : model[3]}</p><p><b>${groupLabel}:</b> ${model[4]}</p><a class="docs-link" href="${model[5]}" target="_blank" rel="noreferrer">${docsLabel} ↗</a></article>`,
      )
      .join("")}</div>`;
  }

  const opencodeConfigRu = `<pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "model": "byesu/claude-opus-4-8",
  "small_model": "byesu/claude-sonnet-5",
  "provider": {
    "byesu": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "byesu",
      "options": {
        "baseURL": "https://byesu.com/v1",
        "apiKey": "ваш_апи_ключ"
      },
      "models": {
        "claude-opus-4-8": { "name": "Claude Opus 4.8" },
        "claude-sonnet-5": { "name": "Claude Sonnet 5" },
        "gpt-5.6-sol": { "name": "GPT-5.6 Sol" },
        "gpt-5.6-terra": { "name": "GPT-5.6 Terra" },
        "gpt-5.6-luna": { "name": "GPT-5.6 Luna" },
        "grok-4.5": { "name": "Grok 4.5" },
        "gpt-5.5": { "name": "GPT-5.5" }
      }
    }
  }
}</code></pre>`;
  const opencodeConfigEn = opencodeConfigRu.replace("ваш_апи_ключ", "your_api_key");

  const ru = window.BUYER_GUIDE;
  ru.navigation = [
    { id: "start", label: "Начало" },
    { id: "codex", label: "Codex" },
    { id: "clients", label: "Клиенты" },
    { id: "models", label: "Модели" },
    { id: "help", label: "Помощь" },
  ];
  ru.menuLabel = "Выберите нужный раздел";
  ru.sections.find((section) => section.id === "intro").view = "start";
  ru.sections.find((section) => section.id === "codex").view = "codex";
  ru.sections.find((section) => section.id === "finish").view = "start";
  ru.sections.find((section) => section.id === "tips").view = "help";
  const ruOpenCode = ru.sections.find((section) => section.id === "opencode");
  ruOpenCode.view = "clients";
  ruOpenCode.note = "Актуальная настройка OpenCode с новыми моделями.";
  ruOpenCode.html =
    "<p>Путь к конфигурации: <code>~/.config/opencode/opencode.json</code> или <code>opencode.jsonc</code>. Добавьте Byesu как отдельного OpenAI-совместимого провайдера:</p>" +
    opencodeConfigRu +
    "<p>Замените <code>ваш_апи_ключ</code> на свой токен. Названия моделей можно менять и дополнять по фактическому списку в консоли Byesu.</p>";
  ru.sections.unshift({
    id: "quick-start",
    view: "start",
    title: "Подключение за 3 шага",
    note: "Один ключ, один адрес и одна модель.",
    html:
      "<p><strong>Схема одинакова для любого клиента:</strong> создайте токен, укажите правильный Base URL и выберите модель из вашей группы.</p>" +
      "<div class=\"connection-grid\"><div><b>OpenAI / Codex</b><code>https://byesu.com/v1</code><small>Chat Completions или Responses</small></div><div><b>Claude / Anthropic</b><code>https://byesu.com</code><small>Без <code>/v1</code> в Base URL</small></div><div><b>NewAPI</b><code>https://byesu.com</code><small>Если клиент сам дополняет путь</small></div></div>" +
      "<ol><li>Создайте API Key вида <code>sk-...</code> и не публикуйте его.</li><li>Выберите группу токена под нужную модель.</li><li>Впишите Base URL, ключ и точное имя модели в клиент.</li></ol>" +
      "<p class=\"source-note\">Актуальный список моделей и цены всегда проверяйте в консоли Byesu.</p>",
  });
  ru.sections.push({
    id: "codex-errors",
    view: "codex",
    title: "Частые ошибки Codex",
    note: "Что проверить, если Codex не подключается.",
    html:
      "<div class=\"error-grid\">" +
      "<details><summary>401 / invalid token</summary><p>Заново скопируйте ключ без пробелов. В <code>auth.json</code> поле должно называться <code>OPENAI_API_KEY</code>, а сам файл должен лежать в папке <code>.codex</code>.</p></details>" +
      "<details><summary>404 / неверный интерфейс</summary><p>Проверьте, что <code>base_url</code> заканчивается на <code>/v1</code>, а <code>wire_api</code> равен <code>responses</code>. Не добавляйте <code>/responses</code> в Base URL вручную.</p></details>" +
      "<details><summary>Модель не существует / нет каналов</summary><p>Имя модели должно совпадать с консолью символ в символ. Также проверьте, что группа вашего токена поддерживает выбранную модель.</p></details>" +
      "<details><summary>Недостаточно средств</summary><p>Проверьте баланс аккаунта и лимит расхода, установленный для конкретного токена.</p></details>" +
      "<details><summary>Connection error / обрыв потока</summary><p>Повторите запрос один раз. Если ошибка возвращается, попробуйте другую модель и перезапустите Codex.</p></details>" +
      "<details><summary>Reasoning не применяется</summary><p>В Codex используйте параметр <code>model_reasoning_effort</code>. Не добавляйте вручную синтаксис из Chat Completions.</p></details>" +
      "</div>",
  });
  ru.sections.push({
    id: "client-catalog",
    view: "clients",
    title: "Выберите клиент",
    note: "Все способы подключения из документации Byesu.",
    html:
      "<p>Откройте карточку нужной программы: внутри указан формат API, правильный адрес и рекомендуемая модель.</p>" +
      clientCatalog("ru") +
      `<p class="source-note">Источник: <a href="${sourceLink}" target="_blank" rel="noreferrer">документация Byesu ↗</a></p>`,
  });
  ru.sections.push({
    id: "model-catalog",
    view: "models",
    title: "Доступные модели",
    note: "Текст, код, изображения и видео.",
    html:
      "<p>Выберите модель под задачу. Её имя нужно вставлять в клиент точно так, как показано ниже. Фактическая доступность зависит от группы токена и списка в консоли.</p>" +
      modelCatalog("ru"),
  });

  const en = window.BUYER_GUIDE_EN;
  en.navigation = [
    { id: "start", label: "Start" },
    { id: "codex", label: "Codex" },
    { id: "clients", label: "Clients" },
    { id: "models", label: "Models" },
    { id: "help", label: "Help" },
  ];
  en.menuLabel = "Choose a section";
  en.sections.find((section) => section.id === "intro").view = "start";
  en.sections.find((section) => section.id === "codex").view = "codex";
  en.sections.find((section) => section.id === "finish").view = "start";
  en.sections.find((section) => section.id === "tips").view = "help";
  const enOpenCode = en.sections.find((section) => section.id === "opencode");
  enOpenCode.view = "clients";
  enOpenCode.note = "Current OpenCode setup with the latest models.";
  enOpenCode.html =
    "<p>Configuration path: <code>~/.config/opencode/opencode.json</code> or <code>opencode.jsonc</code>. Add Byesu as a separate OpenAI-compatible provider:</p>" +
    opencodeConfigEn +
    "<p>Replace <code>your_api_key</code> with your token. You can change or add model names based on the current list in the Byesu console.</p>";
  en.sections.unshift({
    id: "quick-start",
    view: "start",
    title: "Connect in 3 steps",
    note: "One key, one URL, and one model.",
    html:
      "<p><strong>The process is the same for every client:</strong> create a token, enter the correct Base URL, and choose a model supported by your token group.</p>" +
      "<div class=\"connection-grid\"><div><b>OpenAI / Codex</b><code>https://byesu.com/v1</code><small>Chat Completions or Responses</small></div><div><b>Claude / Anthropic</b><code>https://byesu.com</code><small>No <code>/v1</code> in Base URL</small></div><div><b>NewAPI</b><code>https://byesu.com</code><small>When the client appends the path itself</small></div></div>" +
      "<ol><li>Create an API key beginning with <code>sk-...</code> and keep it private.</li><li>Choose a token group that supports the required model.</li><li>Enter the Base URL, key, and exact model name in the client.</li></ol>" +
      "<p class=\"source-note\">Always check the Byesu console for the current model list and pricing.</p>",
  });
  en.sections.push({
    id: "codex-errors",
    view: "codex",
    title: "Common Codex errors",
    note: "What to check when Codex cannot connect.",
    html:
      "<div class=\"error-grid\">" +
      "<details><summary>401 / invalid token</summary><p>Copy the key again without spaces. In <code>auth.json</code>, the field must be named <code>OPENAI_API_KEY</code>, and the file must be inside the <code>.codex</code> folder.</p></details>" +
      "<details><summary>404 / incorrect endpoint</summary><p>Make sure <code>base_url</code> ends in <code>/v1</code> and <code>wire_api</code> is set to <code>responses</code>. Do not append <code>/responses</code> manually.</p></details>" +
      "<details><summary>Model not found / no channel</summary><p>The model name must match the console exactly. Also make sure the token group supports the selected model.</p></details>" +
      "<details><summary>Insufficient balance</summary><p>Check the account balance and the spending limit configured for the token.</p></details>" +
      "<details><summary>Connection error / disconnected stream</summary><p>Retry once. If the error returns, try another model and restart Codex.</p></details>" +
      "<details><summary>Reasoning setting is ignored</summary><p>Use <code>model_reasoning_effort</code> in Codex. Do not manually add Chat Completions reasoning syntax.</p></details>" +
      "</div>",
  });
  en.sections.push({
    id: "client-catalog",
    view: "clients",
    title: "Choose a client",
    note: "All connection methods from the Byesu documentation.",
    html:
      "<p>Open the required application card to see its API format, correct URL, and recommended model.</p>" +
      clientCatalog("en") +
      `<p class="source-note">Source: <a href="${sourceLink}" target="_blank" rel="noreferrer">Byesu documentation ↗</a></p>`,
  });
  en.sections.push({
    id: "model-catalog",
    view: "models",
    title: "Available models",
    note: "Text, coding, images, and video.",
    html:
      "<p>Choose a model for your task. Enter its name in the client exactly as shown below. Actual availability depends on the token group and the current console list.</p>" +
      modelCatalog("en"),
  });
})();
