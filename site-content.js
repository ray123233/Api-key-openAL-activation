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

(function () {
  const groups = {
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

  const appGuides = [
    {
      group: "code",
      name: "CC Switch",
      levelRu: "Средняя сложность · управление AI CLI",
      levelEn: "Intermediate · AI CLI manager",
      format: "Claude / Anthropic",
      baseUrl: "https://byesu.com",
      model: "claude-opus-4-8",
      ru: `<p>CC Switch переключает Claude Code и другие AI CLI между поставщиками без ручного изменения конфигурации.</p>
        <h4>1. Установите CC Switch</h4><p>Скачайте установщик для Windows или Linux со страницы проекта. На macOS можно выполнить:</p><pre><code>brew tap farion1231/ccswitch
brew install --cask cc-switch</code></pre>
        <h4>2. Добавьте Byesu</h4><p>Откройте категорию <strong>Claude</strong>. Самый быстрый способ: в консоли Byesu откройте импорт CC Switch, выберите Claude и основную модель <code>claude-opus-4-8</code>.</p><p>При ручном добавлении укажите:</p><ul><li>Base URL: <code>https://byesu.com</code> без <code>/v1</code>.</li><li>API Key / Auth Token: ваш ключ <code>sk-...</code>.</li><li>Opus: <code>claude-opus-4-8</code>. Для Sonnet и Haiku можно выбрать ту же или другую доступную модель.</li></ul>
        <h4>3. Активируйте и проверьте</h4><p>Сохраните поставщика и нажмите на запись Byesu. CC Switch запишет <code>ANTHROPIC_BASE_URL</code> и <code>ANTHROPIC_AUTH_TOKEN</code>. Откройте новый терминал и выполните:</p><pre><code>claude</code></pre><p>При ошибке 401 заново вставьте ключ без пробелов. Если терминал был открыт раньше, перезапустите его.</p>`,
      en: `<p>CC Switch manages AI CLI providers without manual configuration changes.</p><h4>1. Install</h4><p>Use the Windows/Linux release, or run on macOS:</p><pre><code>brew tap farion1231/ccswitch
brew install --cask cc-switch</code></pre><h4>2. Add Byesu</h4><p>Select the Claude category. Import from the Byesu console or add a provider manually with Base URL <code>https://byesu.com</code>, your <code>sk-...</code> token, and model <code>claude-opus-4-8</code>.</p><h4>3. Test</h4><p>Activate the provider, open a new terminal, and run <code>claude</code>.</p>`,
      docs: "https://docs.byesu.com/ru/clients/cc-switch",
    },
    {
      group: "code",
      name: "Claude Code CLI",
      levelRu: "Продвинутая · командная строка",
      levelEn: "Advanced · command line",
      format: "Claude / Anthropic",
      baseUrl: "https://byesu.com",
      model: "claude-opus-4-8",
      ru: `<h4>1. Установите Claude Code</h4><p>Нужен Node.js 18+. На Windows также установите Git for Windows.</p><pre><code>npm install -g @anthropic-ai/claude-code
claude --version</code></pre><p>На macOS/Linux можно использовать официальный установщик:</p><pre><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre>
        <h4>2. Подключите Byesu</h4><p>В Windows PowerShell задайте переменные окружения через «Параметры системы → Переменные среды». Для macOS/Linux добавьте в профиль оболочки:</p><pre><code>export ANTHROPIC_BASE_URL="https://byesu.com"
export ANTHROPIC_API_KEY="sk-ваш-токен"
export ANTHROPIC_MODEL="claude-opus-4-8"</code></pre><p>На Windows добавьте эти переменные через параметры системы. Если авторизация не проходит, используйте <code>ANTHROPIC_AUTH_TOKEN</code> вместо <code>ANTHROPIC_API_KEY</code>.</p>
        <h4>3. Запустите</h4><pre><code>claude</code></pre><p>Модель можно сменить командой <code>/model</code>. Ошибка «no available channel» означает, что группа токена не поддерживает выбранную модель.</p>`,
      en: `<h4>1. Install</h4><p>Install Node.js 18+ and Git for Windows when applicable, then run:</p><pre><code>npm install -g @anthropic-ai/claude-code
claude --version</code></pre><h4>2. Configure</h4><pre><code>export ANTHROPIC_BASE_URL="https://byesu.com"
export ANTHROPIC_API_KEY="sk-your-token"
export ANTHROPIC_MODEL="claude-opus-4-8"</code></pre><p>Use <code>ANTHROPIC_AUTH_TOKEN</code> if your version rejects <code>ANTHROPIC_API_KEY</code>.</p><h4>3. Run</h4><pre><code>claude</code></pre>`,
      docs: "https://docs.byesu.com/ru/clients/claude-cli",
    },
    {
      group: "code",
      name: "OpenCode",
      levelRu: "Средняя · JSON-конфигурация",
      levelEn: "Intermediate · JSON configuration",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "claude-opus-4-8",
      ru: `<h4>1. Установите OpenCode</h4><pre><code>curl -fsSL https://opencode.ai/install | bash
opencode --version</code></pre><p>Также доступна установка через npm или Homebrew.</p>
        <h4>2. Создайте конфигурацию</h4><p>Используйте глобальный файл <code>~/.config/opencode/opencode.json</code> или <code>opencode.json</code> в корне проекта:</p><pre><code>{
  "$schema": "https://opencode.ai/config.json",
  "model": "byesu/claude-opus-4-8",
  "small_model": "byesu/claude-sonnet-5",
  "provider": {
    "byesu": {
      "npm": "@ai-sdk/openai-compatible",
      "name": "byesu",
      "options": {
        "baseURL": "https://byesu.com/v1",
        "apiKey": "sk-ваш-токен"
      },
      "models": {
        "claude-opus-4-8": { "name": "Claude Opus 4.8" },
        "claude-sonnet-5": { "name": "Claude Sonnet 5" },
        "gpt-5.6-terra": { "name": "GPT-5.6 Terra" },
        "grok-4.5": { "name": "Grok 4.5" }
      }
    }
  }
}</code></pre><p>Обязательно используйте пакет <code>@ai-sdk/openai-compatible</code>. Имена моделей пишутся точно как в консоли, а при выборе добавляется префикс <code>byesu/</code>.</p>
        <h4>3. Безопасное хранение ключа</h4><p>Вместо открытого ключа можно указать <code>"apiKey": "{env:BYESU_API_KEY}"</code> и создать переменную:</p><pre><code>export BYESU_API_KEY="sk-ваш-токен"</code></pre><p>Другой вариант: команда <code>/connect</code>, пункт Other, идентификатор поставщика <code>byesu</code>.</p>
        <h4>4. Запустите</h4><pre><code>opencode</code></pre><p>При «no available channel» проверьте группу токена и точное имя модели.</p>`,
      en: `<h4>1. Install</h4><pre><code>curl -fsSL https://opencode.ai/install | bash
opencode --version</code></pre><h4>2. Configure</h4><p>Create <code>~/.config/opencode/opencode.json</code> with a provider using <code>@ai-sdk/openai-compatible</code>, Base URL <code>https://byesu.com/v1</code>, and your token. Model references must use the <code>byesu/</code> prefix.</p><pre><code>"options": {
  "baseURL": "https://byesu.com/v1",
  "apiKey": "{env:BYESU_API_KEY}"
}</code></pre><h4>3. Run</h4><pre><code>opencode</code></pre>`,
      docs: "https://docs.byesu.com/ru/clients/opencode",
    },
    {
      group: "code",
      name: "Roo Code",
      levelRu: "Средняя · расширение VS Code",
      levelEn: "Intermediate · VS Code extension",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "claude-opus-4-8",
      ru: `<h4>1. Установите расширение</h4><p>В VS Code нажмите <code>Ctrl/⌘ + Shift + X</code>, найдите Roo Code и установите его.</p><h4>2. Заполните настройки</h4><p>Откройте Roo Code, нажмите шестерёнку и выберите <strong>OpenAI Compatible</strong>.</p><ul><li>Base URL: <code>https://byesu.com/v1</code></li><li>API Key: ваш <code>sk-...</code></li><li>Model: например <code>claude-opus-4-8</code> или <code>gpt-5.5</code></li></ul><h4>3. Проверьте</h4><p>Вернитесь в чат и отправьте запрос. При 404 проверьте наличие <code>/v1</code>; имя модели должно точно совпадать с консолью.</p>`,
      en: `<h4>1. Install</h4><p>Install Roo Code from the VS Code extensions view.</p><h4>2. Configure</h4><p>Select OpenAI Compatible and enter Base URL <code>https://byesu.com/v1</code>, your token, and an exact model name.</p><h4>3. Test</h4><p>Send a message in the Roo Code chat.</p>`,
      docs: "https://docs.byesu.com/ru/clients/roo-code",
    },
    {
      group: "code",
      name: "Factory Droid CLI",
      levelRu: "Продвинутая · командная строка",
      levelEn: "Advanced · command line",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "claude-opus-4-8",
      ru: `<h4>1. Установите Droid</h4><p>Windows PowerShell:</p><pre><code>irm https://app.factory.ai/cli/windows | iex</code></pre><h4>2. Настройте Byesu</h4><p>Быстрый скрипт:</p><pre><code>iex (irm 'https://raw.githubusercontent.com/QuantumNous/new-api-docs/refs/heads/main/helper/factory-cli-setup.ps1')</code></pre><p>Введите <code>https://byesu.com/v1</code> и свой ключ. Для ручной настройки откройте <code>%USERPROFILE%\.factory\config.json</code> на Windows или <code>~/.factory/config.json</code> на macOS/Linux и добавьте модель в <code>custom_models</code>:</p><pre><code>{
  "model_display_name": "Claude Opus 4.8 [Byesu]",
  "model": "claude-opus-4-8",
  "base_url": "https://byesu.com/v1",
  "api_key": "sk-ваш-токен",
  "provider": "openai"
}</code></pre><p>Для нативного Anthropic-протокола используйте <code>provider: "anthropic"</code> и адрес <code>https://byesu.com</code>, но обычно достаточно варианта OpenAI.</p><h4>3. Запустите</h4><pre><code>cd путь-к-проекту
droid</code></pre>`,
      en: `<h4>1. Install</h4><pre><code>irm https://app.factory.ai/cli/windows | iex</code></pre><h4>2. Configure</h4><p>Edit <code>~/.factory/config.json</code> and add a custom model with provider <code>openai</code>, Base URL <code>https://byesu.com/v1</code>, your token, and an exact model ID.</p><h4>3. Run</h4><pre><code>droid</code></pre>`,
      docs: "https://docs.byesu.com/ru/clients/factory-droid-cli",
    },
    {
      group: "desktop",
      name: "Cherry Studio",
      levelRu: "Простая · без кода",
      levelEn: "Easy · no code",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com",
      model: "gpt-5.5",
      ru: `<h4>1. Установите Cherry Studio</h4><p>Скачайте программу с <a href="https://cherry-ai.com" target="_blank" rel="noreferrer">cherry-ai.com</a> и запустите её.</p><h4>2. Добавьте поставщика</h4><p>Откройте «Сервисы моделей / Поставщики моделей», нажмите «Добавить» и выберите OpenAI.</p><ul><li>API Host: <code>https://byesu.com</code></li><li>API Key: ваш <code>sk-...</code></li></ul><p>Предпросмотр запроса должен получиться <code>https://byesu.com/v1/chat/completions</code>. Если видите <code>/v1/v1/</code>, уберите лишний <code>/v1</code> из API Host.</p><h4>3. Добавьте модели</h4><p>Введите точные названия из консоли, например <code>gpt-5.5</code>, <code>claude-opus-4-8</code> или <code>gpt-5.6-terra</code>, включите их и создайте новый чат.</p>`,
      en: `<h4>1. Install</h4><p>Download Cherry Studio from <a href="https://cherry-ai.com" target="_blank" rel="noreferrer">cherry-ai.com</a>.</p><h4>2. Add provider</h4><p>Select OpenAI, enter API Host <code>https://byesu.com</code> and your token. The request preview must end in <code>/v1/chat/completions</code>.</p><h4>3. Add models</h4><p>Enter exact model IDs from the console and start a chat.</p>`,
      docs: "https://docs.byesu.com/ru/clients/cherry-studio",
    },
    {
      group: "desktop",
      name: "DeepChat",
      levelRu: "Средняя · графический клиент",
      levelEn: "Intermediate · desktop GUI",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "claude-opus-4-8",
      ru: `<h4>1. Установите DeepChat</h4><p>Скачайте версию для Windows, macOS или Linux со страницы проекта.</p><h4>2. Добавьте поставщика</h4><p>Откройте «Настройки → Сервисы моделей» и выберите тип <strong>OpenAI / OpenAI Compatible</strong>.</p><ul><li>API Host: <code>https://byesu.com/v1</code></li><li>API Key: ваш <code>sk-...</code></li></ul><p>Не добавляйте <code>/chat/completions</code> вручную. При ошибке 404 попробуйте адрес <code>https://byesu.com</code>, если ваша версия DeepChat сама добавляет <code>/v1</code>.</p><h4>3. Добавьте модель</h4><p>Получите список моделей или добавьте точное имя вручную. Включите модель, выберите её на главном экране и отправьте тестовое сообщение.</p>`,
      en: `<h4>1. Install</h4><p>Install DeepChat for your operating system.</p><h4>2. Add provider</h4><p>Select OpenAI Compatible, set <code>https://byesu.com/v1</code>, and enter your token. Do not append <code>/chat/completions</code>.</p><h4>3. Add a model</h4><p>Enter an exact model ID, enable it, and send a test message.</p>`,
      docs: "https://docs.byesu.com/ru/clients/deepchat",
    },
    {
      group: "desktop",
      name: "AionUi",
      levelRu: "Средняя · графический интерфейс",
      levelEn: "Intermediate · graphical interface",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "claude-opus-4-8",
      ru: `<h4>1. Установите AionUi</h4><p>Скачайте актуальную версию на <a href="https://github.com/iOfficeAI/AionUi/releases" target="_blank" rel="noreferrer">странице релизов</a>.</p><h4>2. Добавьте модель Byesu</h4><p>В Settings выберите NewAPI, OpenAI Compatible или Custom.</p><ul><li>API Address: <code>https://byesu.com/v1</code></li><li>API Key: ваш <code>sk-...</code></li><li>Model: точное имя из консоли</li><li>Request Protocol: OpenAI-compatible</li></ul><p>Не добавляйте в конец <code>/chat/completions</code>.</p><h4>3. Claude Code внутри AionUi</h4><p>Этот агент использует нативный Anthropic-протокол: Base URL <code>https://byesu.com</code> без <code>/v1</code>, тот же ключ и модель <code>claude-opus-4-8</code>.</p><h4>4. Проверка</h4><p>Создайте новую сессию, выберите добавленную модель и отправьте запрос.</p>`,
      en: `<h4>1. Install</h4><p>Download AionUi from its GitHub releases page.</p><h4>2. Add model</h4><p>Select NewAPI/OpenAI Compatible and enter <code>https://byesu.com/v1</code>, your token, and an exact model ID.</p><h4>3. Claude Code agent</h4><p>Use the Anthropic endpoint <code>https://byesu.com</code> without <code>/v1</code>.</p>`,
      docs: "https://docs.byesu.com/ru/clients/aionui",
    },
    {
      group: "desktop",
      name: "Claude Desktop",
      levelRu: "Прямое подключение не поддерживается",
      levelEn: "Direct connection is unsupported",
      format: "Claude",
      baseUrl: "Не поддерживается",
      model: "claude-opus-4-8",
      ru: `<div class="guide-warning"><strong>Важно:</strong> официальное приложение Claude Desktop сейчас не позволяет заменить адрес API на сторонний. Поэтому прямое подключение Byesu может не работать.</div><p>Для работы с теми же моделями используйте Claude Code CLI, Cherry Studio, DeepChat или AionUi.</p>`,
      en: `<div class="guide-warning"><strong>Important:</strong> the official Claude Desktop app currently does not support a custom API endpoint, so direct Byesu connection may not work.</div><p>Use Claude Code CLI, Cherry Studio, DeepChat, or AionUi instead.</p>`,
      docs: "https://docs.byesu.com/ru/clients/claude-desktop",
    },
    {
      group: "bots",
      name: "AstrBot",
      levelRu: "Продвинутая · панель управления",
      levelEn: "Advanced · control panel",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.5",
      ru: `<h4>1. Установите AstrBot</h4><p>Разверните AstrBot по официальной инструкции и откройте панель управления, обычно по адресу <code>http://IP-сервера:6185</code>.</p><h4>2. Добавьте поставщика</h4><p>В разделе Provider создайте поставщика OpenAI-compatible:</p><ul><li>API Base URL: <code>https://byesu.com/v1</code></li><li>API Key: ваш <code>sk-...</code></li><li>Model: например <code>gpt-5.5</code> или <code>claude-opus-4-8</code></li></ul><h4>3. Назначьте модель</h4><p>Выберите поставщика Byesu как модель чата по умолчанию и отправьте тестовое сообщение через панель или подключённый мессенджер. При 404 проверьте <code>/v1</code>.</p>`,
      en: `<h4>1. Install</h4><p>Deploy AstrBot and open its control panel.</p><h4>2. Add provider</h4><p>Create an OpenAI-compatible provider with <code>https://byesu.com/v1</code>, your token, and an exact model ID.</p><h4>3. Test</h4><p>Set it as the default chat model and send a message.</p>`,
      docs: "https://docs.byesu.com/ru/clients/astrbot",
    },
    {
      group: "bots",
      name: "LangBot",
      levelRu: "Средняя · панель управления",
      levelEn: "Intermediate · control panel",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.5",
      ru: `<h4>1. Установите LangBot</h4><pre><code>git clone https://github.com/langbot-app/LangBot</code></pre><p>Завершите запуск по официальной инструкции и откройте <code>http://localhost:5300</code>.</p><h4>2. Добавьте модель</h4><p>Выберите NewAPI или OpenAI Compatible:</p><ul><li>Request URL: <code>https://byesu.com/v1</code></li><li>API Key: ваш <code>sk-...</code></li><li>Model: <code>gpt-5.5</code>, <code>claude-opus-4-8</code> или другая доступная модель</li></ul><h4>3. Подключите Pipeline</h4><p>В сценарии диалога выберите добавленную модель и проведите тест. Для базы знаний отдельно добавьте доступную Embedding-модель с тем же Base URL.</p>`,
      en: `<h4>1. Install</h4><p>Deploy LangBot and open its panel at <code>http://localhost:5300</code>.</p><h4>2. Add model</h4><p>Select NewAPI/OpenAI Compatible and enter <code>https://byesu.com/v1</code>, your token, and a model ID.</p><h4>3. Pipeline</h4><p>Select the model in the conversation pipeline and test it.</p>`,
      docs: "https://docs.byesu.com/ru/clients/langbot",
    },
    {
      group: "bots",
      name: "Memoh",
      levelRu: "Продвинутая · самостоятельный хостинг",
      levelEn: "Advanced · self-hosted",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "claude-opus-4-8",
      ru: `<h4>1. Установите Memoh</h4><pre><code>curl -fsSL https://memoh.sh | sudo sh</code></pre><p>При ручном развёртывании скопируйте <code>conf/app.docker.toml</code> в <code>config.toml</code>, затем выполните <code>docker compose up -d</code>. Панель обычно доступна на <code>http://localhost:8082</code>.</p><h4>2. Добавьте поставщика</h4><p>В Provider Management создайте OpenAI-compatible поставщика:</p><ul><li>API Base URL: <code>https://byesu.com/v1</code></li><li>API Key: ваш <code>sk-...</code></li></ul><h4>3. Импортируйте модели</h4><p>Получите список или добавьте модели вручную. Имя должно поддерживаться группой токена.</p><h4>4. Настройте бота</h4><p>Выберите импортированную модель как модель диалога нужного бота и проведите тест.</p>`,
      en: `<h4>1. Install</h4><pre><code>curl -fsSL https://memoh.sh | sudo sh</code></pre><h4>2. Add provider</h4><p>Create an OpenAI-compatible provider with <code>https://byesu.com/v1</code> and your token.</p><h4>3. Import and assign models</h4><p>Import exact model IDs and assign one to the required bot.</p>`,
      docs: "https://docs.byesu.com/ru/clients/memoh",
    },
    {
      group: "bots",
      name: "OpenClaw",
      levelRu: "Продвинутая · мастер или JSON5",
      levelEn: "Advanced · wizard or JSON5",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.5",
      ru: `<h4>Вариант 1: мастер настройки</h4><pre><code>openclaw onboard</code></pre><p>Выберите Custom OpenAI-compatible endpoint и укажите Base URL <code>https://byesu.com/v1</code>, ключ <code>sk-...</code> и имя модели.</p><h4>Вариант 2: JSON5</h4><p>Откройте <code>~/.openclaw/openclaw.json</code> и добавьте поставщика в <code>models.providers</code>:</p><pre><code>byesu: {
  baseUrl: "https://byesu.com/v1",
  apiKey: "&#36;{BYESU_API_KEY}",
  api: "openai-completions",
  models: [
    { id: "claude-opus-4-8", name: "Byesu Claude Opus 4.8" }
  ]
}</code></pre><p>Создайте переменную <code>BYESU_API_KEY</code> и убедитесь, что её видит фоновый Gateway.</p><h4>Проверка</h4><pre><code>openclaw models list</code></pre>`,
      en: `<h4>Option 1: wizard</h4><pre><code>openclaw onboard</code></pre><p>Select a custom OpenAI-compatible endpoint and enter <code>https://byesu.com/v1</code>, your token, and model.</p><h4>Option 2: JSON5</h4><p>Add a provider under <code>models.providers</code> in <code>~/.openclaw/openclaw.json</code>. Prefer the <code>BYESU_API_KEY</code> environment variable.</p><h4>Test</h4><pre><code>openclaw models list</code></pre>`,
      docs: "https://docs.byesu.com/ru/clients/openclaw",
    },
    {
      group: "bots",
      name: "Hermes",
      levelRu: "Продвинутая · мастер или YAML",
      levelEn: "Advanced · wizard or YAML",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.5",
      ru: `<h4>Вариант 1: мастер</h4><pre><code>hermes model</code></pre><p>Выберите Custom OpenAI-compatible endpoint. Введите <code>https://byesu.com/v1</code>, свой ключ и точное имя модели.</p><h4>Вариант 2: YAML</h4><p>Измените секцию <code>model</code> в <code>~/.hermes/config.yaml</code>:</p><pre><code>model:
  provider: "custom"
  base_url: "https://byesu.com/v1"
  api_key: "sk-ваш-токен"
  default: "gpt-5.5"</code></pre><p>Безопаснее оставить ключ в <code>~/.hermes/.env</code>:</p><pre><code>OPENAI_API_KEY=sk-ваш-токен</code></pre><h4>Проверка</h4><pre><code>hermes</code></pre>`,
      en: `<h4>Option 1: wizard</h4><pre><code>hermes model</code></pre><p>Select Custom OpenAI-compatible endpoint and enter <code>https://byesu.com/v1</code>, your token, and model.</p><h4>Option 2: YAML</h4><p>Edit <code>~/.hermes/config.yaml</code>, or keep the key as <code>OPENAI_API_KEY</code> in <code>~/.hermes/.env</code>.</p><h4>Test</h4><pre><code>hermes</code></pre>`,
      docs: "https://docs.byesu.com/ru/clients/hermes",
    },
    {
      group: "translation",
      name: "Fluent Read",
      levelRu: "Простая · расширение браузера",
      levelEn: "Easy · browser extension",
      format: "NewAPI",
      baseUrl: "https://byesu.com",
      model: "claude-opus-4-8",
      ru: `<h4>1. Установите расширение</h4><p>Установите Fluent Read из магазина расширений своего браузера и откройте его настройки перевода.</p><h4>2. Добавьте Byesu</h4><p>Выберите встроенный движок <strong>NewAPI</strong>.</p><ul><li>NewAPI URL: <code>https://byesu.com</code> без <code>/v1</code></li><li>Access Token: ваш <code>sk-...</code></li><li>Model: выберите из списка или введите точное имя вручную</li></ul><p>Для NewAPI расширение само добавляет путь. Если выбрать обычный OpenAI-compatible движок, тогда используйте <code>https://byesu.com/v1</code>.</p><h4>3. Проверьте</h4><p>Откройте иностранную страницу и запустите перевод. При тайм-ауте сначала проверьте, не получился ли адрес <code>/v1/v1</code>.</p>`,
      en: `<h4>1. Install</h4><p>Install Fluent Read and open translation settings.</p><h4>2. Configure</h4><p>Select NewAPI, enter <code>https://byesu.com</code> without <code>/v1</code>, your token, and a model. For a regular OpenAI-compatible engine use <code>https://byesu.com/v1</code>.</p><h4>3. Test</h4><p>Translate a foreign-language page.</p>`,
      docs: "https://docs.byesu.com/ru/clients/fluent-read",
    },
    {
      group: "translation",
      name: "Luna Translator",
      levelRu: "Средняя · импорт или ручная настройка",
      levelEn: "Intermediate · import or manual setup",
      format: "OpenAI-compatible",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.5",
      ru: `<h4>1. Установите Luna Translator</h4><p>Скачайте актуальную версию со страницы проекта и запустите программу.</p><h4>2. Добавьте Byesu</h4><p>Используйте импорт LunaTranslator из панели Byesu или создайте универсальный LLM-интерфейс вручную:</p><ul><li>Base URL: <code>https://byesu.com/v1</code></li><li>API Key: ваш <code>sk-...</code></li><li>Model: например <code>gpt-5.5</code> или <code>claude-opus-4-8</code></li></ul><p>Включите интерфейс и обновите список моделей. Base URL обязательно заканчивается на <code>/v1</code>.</p><h4>3. Проверьте</h4><p>Запустите перевод тестовой строки или игры. При пустом списке моделей проверьте ключ, адрес и группу токена.</p>`,
      en: `<h4>1. Install</h4><p>Install Luna Translator from its project releases.</p><h4>2. Configure</h4><p>Import from the Byesu console or create a universal LLM interface with <code>https://byesu.com/v1</code>, your token, and an exact model ID.</p><h4>3. Test</h4><p>Enable the interface, refresh models, and translate a test line.</p>`,
      docs: "https://docs.byesu.com/ru/clients/luna-translator",
    },
  ];

  const platformNotes = {
    "CC Switch": {
      ru: `<h4>Windows</h4><p>Скачайте Windows-релиз CC Switch, установите приложение и откройте категорию Claude.</p><h4>macOS</h4><pre><code>brew tap farion1231/ccswitch
brew install --cask cc-switch</code></pre><h4>Linux</h4><p>Скачайте пакет для своего дистрибутива, установите его и запустите CC Switch из меню приложений.</p>`,
      en: `<h4>Windows</h4><p>Download the Windows CC Switch release, install it, and open the Claude category.</p><h4>macOS</h4><pre><code>brew tap farion1231/ccswitch
brew install --cask cc-switch</code></pre><h4>Linux</h4><p>Install the package for your distribution and launch CC Switch from the applications menu.</p>`,
    },
    "Claude Code CLI": {
      ru: `<h4>Windows</h4><p>Установите Node.js 18+ и Git for Windows. Запускайте Claude Code из Git Bash или PowerShell.</p><h4>macOS / Linux</h4><pre><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre><p>После установки перезапустите терминал, чтобы команда <code>claude</code> появилась в PATH.</p>`,
      en: `<h4>Windows</h4><p>Install Node.js 18+ and Git for Windows. Run Claude Code from Git Bash or PowerShell.</p><h4>macOS / Linux</h4><pre><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre><p>Restart the terminal after installation so <code>claude</code> is available in PATH.</p>`,
    },
    OpenCode: {
      ru: `<h4>Windows</h4><p>Установите Node.js 18+, затем выполните в PowerShell:</p><pre><code>npm install -g opencode-ai
opencode --version</code></pre><h4>macOS</h4><pre><code>brew install anomalyco/tap/opencode</code></pre><h4>Linux</h4><pre><code>curl -fsSL https://opencode.ai/install | bash
opencode --version</code></pre><p>Один и тот же <code>opencode.json</code> можно использовать на всех системах; путь глобального файла на macOS/Linux: <code>~/.config/opencode/opencode.json</code>.</p>`,
      en: `<h4>Windows</h4><p>Install Node.js 18+ and run in PowerShell:</p><pre><code>npm install -g opencode-ai
opencode --version</code></pre><h4>macOS</h4><pre><code>brew install anomalyco/tap/opencode</code></pre><h4>Linux</h4><pre><code>curl -fsSL https://opencode.ai/install | bash
opencode --version</code></pre><p>Use <code>~/.config/opencode/opencode.json</code> on macOS/Linux; the project-level file works on every OS.</p>`,
    },
    "Roo Code": {
      ru: `<h4>Windows / macOS / Linux</h4><p>Roo Code устанавливается одинаково: откройте VS Code, нажмите <code>Ctrl/⌘ + Shift + X</code>, найдите расширение Roo Code и установите его. Настройки API находятся внутри расширения, отдельный конфигурационный файл не нужен.</p>`,
      en: `<h4>Windows / macOS / Linux</h4><p>Install Roo Code from the VS Code extensions view with <code>Ctrl/⌘ + Shift + X</code>. API settings are stored inside the extension; no separate config file is required.</p>`,
    },
    "Factory Droid CLI": {
      ru: `<h4>Windows</h4><pre><code>irm https://app.factory.ai/cli/windows | iex</code></pre><p>Если PowerShell блокирует запуск, используйте <code>Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser</code>.</p><h4>macOS / Linux</h4><p>Установите Droid CLI способом для Unix-систем из установщика Factory AI, затем проверьте командой <code>droid --version</code>. Файл настроек в обеих системах находится в <code>~/.factory/config.json</code>.</p>`,
      en: `<h4>Windows</h4><pre><code>irm https://app.factory.ai/cli/windows | iex</code></pre><p>If PowerShell blocks the script, use <code>Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser</code>.</p><h4>macOS / Linux</h4><p>Install the Unix Droid CLI package from Factory AI and verify with <code>droid --version</code>. The config path is <code>~/.factory/config.json</code>.</p>`,
    },
    "Cherry Studio": {
      ru: `<h4>Windows / macOS</h4><p>Скачайте установщик Cherry Studio для своей системы, установите приложение и откройте его раздел поставщиков моделей. Поле API Host заполняется одинаково: <code>https://byesu.com</code>; Cherry сам добавляет путь запроса.</p>`,
      en: `<h4>Windows / macOS</h4><p>Download the Cherry Studio installer for your system, install it, and open model providers. Use <code>https://byesu.com</code> as API Host; Cherry adds the request path.</p>`,
    },
    DeepChat: {
      ru: `<h4>Windows / macOS / Linux</h4><p>Скачайте соответствующий установщик DeepChat, установите программу и откройте «Настройки → Сервисы моделей». Интерфейс и поля API одинаковы на всех трёх системах.</p>`,
      en: `<h4>Windows / macOS / Linux</h4><p>Install the DeepChat package for your system and open Settings → Model Services. The API fields are the same on all three systems.</p>`,
    },
    AionUi: {
      ru: `<h4>Windows / macOS / Linux</h4><p>Откройте страницу релизов AionUi, скачайте файл под свою систему и установите приложение. Настройки модели находятся в Settings, а адрес API для OpenAI-совместимого агента одинаков на всех системах.</p>`,
      en: `<h4>Windows / macOS / Linux</h4><p>Download the AionUi release for your system and install it. Model settings are under Settings, and the OpenAI-compatible endpoint is the same on every OS.</p>`,
    },
    "Claude Desktop": {
      ru: `<h4>Windows / macOS</h4><p>Официальная программа Claude Desktop доступна для Windows и macOS, но не позволяет заменить адрес API. Поэтому в этих системах используйте Claude Code CLI, Cherry Studio, DeepChat или AionUi.</p>`,
      en: `<h4>Windows / macOS</h4><p>The official Claude Desktop app is available for Windows and macOS but does not allow a custom API endpoint. Use Claude Code CLI, Cherry Studio, DeepChat, or AionUi instead.</p>`,
    },
    AstrBot: {
      ru: `<h4>Windows</h4><p>Используйте Docker Desktop или WSL2, затем откройте порт панели AstrBot в браузере.</p><h4>macOS / Linux</h4><p>Используйте Docker Engine или ручную установку. После запуска откройте панель по адресу сервера и создайте поставщика в разделе Provider.</p>`,
      en: `<h4>Windows</h4><p>Use Docker Desktop or WSL2, then open the AstrBot panel port in a browser.</p><h4>macOS / Linux</h4><p>Use Docker Engine or a native install. Open the server panel after startup and create the provider under Provider.</p>`,
    },
    LangBot: {
      ru: `<h4>Windows</h4><p>Запустите LangBot через Docker Desktop или WSL2. Панель после запуска открывается на <code>http://localhost:5300</code>.</p><h4>macOS / Linux</h4><pre><code>git clone https://github.com/langbot-app/LangBot</code></pre><p>Запустите проект по инструкции в его каталоге и откройте локальную панель.</p>`,
      en: `<h4>Windows</h4><p>Run LangBot with Docker Desktop or WSL2. The panel is usually available at <code>http://localhost:5300</code>.</p><h4>macOS / Linux</h4><pre><code>git clone https://github.com/langbot-app/LangBot</code></pre><p>Start the project from its directory and open the local panel.</p>`,
    },
    Memoh: {
      ru: `<h4>Windows</h4><p>Установите Docker Desktop с поддержкой WSL2, разверните Memoh из PowerShell или WSL и откройте панель на <code>http://localhost:8082</code>.</p><h4>macOS / Linux</h4><pre><code>curl -fsSL https://memoh.sh | sudo sh</code></pre><p>Для ручного запуска используйте Docker Compose и файл <code>config.toml</code>.</p>`,
      en: `<h4>Windows</h4><p>Install Docker Desktop with WSL2 support, deploy Memoh from PowerShell or WSL, and open <code>http://localhost:8082</code>.</p><h4>macOS / Linux</h4><pre><code>curl -fsSL https://memoh.sh | sudo sh</code></pre><p>For a manual deployment use Docker Compose and <code>config.toml</code>.</p>`,
    },
    OpenClaw: {
      ru: `<h4>Windows</h4><p>Запускайте OpenClaw через WSL2 или Docker Desktop. Переменную <code>BYESU_API_KEY</code> добавьте в окружение того же WSL/Docker-сервиса.</p><h4>macOS / Linux</h4><pre><code>openclaw onboard
openclaw models list</code></pre><p>При ручной настройке используется <code>~/.openclaw/openclaw.json</code>.</p>`,
      en: `<h4>Windows</h4><p>Run OpenClaw through WSL2 or Docker Desktop. Set <code>BYESU_API_KEY</code> in the same WSL/Docker service environment.</p><h4>macOS / Linux</h4><pre><code>openclaw onboard
openclaw models list</code></pre><p>Manual configuration uses <code>~/.openclaw/openclaw.json</code>.</p>`,
    },
    Hermes: {
      ru: `<h4>Windows</h4><p>Запустите Hermes в WSL2, установите его зависимости внутри Linux-окружения и храните конфигурацию в домашней папке WSL.</p><h4>macOS / Linux</h4><pre><code>hermes model
hermes</code></pre><p>Файл настроек: <code>~/.hermes/config.yaml</code>, ключ можно хранить в <code>~/.hermes/.env</code>.</p>`,
      en: `<h4>Windows</h4><p>Run Hermes in WSL2, install its dependencies inside Linux, and keep the config in the WSL home directory.</p><h4>macOS / Linux</h4><pre><code>hermes model
hermes</code></pre><p>Config: <code>~/.hermes/config.yaml</code>; the key can be stored in <code>~/.hermes/.env</code>.</p>`,
    },
    "Fluent Read": {
      ru: `<h4>Windows / macOS / Linux</h4><p>Установите расширение в браузер на своей системе. Настройки Fluent Read находятся в меню расширений и не зависят от операционной системы; для NewAPI оставьте URL без <code>/v1</code>.</p>`,
      en: `<h4>Windows / macOS / Linux</h4><p>Install the browser extension on your system. Fluent Read settings are in the browser extensions menu; for NewAPI keep the URL without <code>/v1</code>.</p>`,
    },
    "Luna Translator": {
      ru: `<h4>Windows</h4><p>Скачайте Windows-сборку Luna Translator, установите её и откройте настройки LLM.</p><h4>macOS / Linux</h4><p>Если для вашей системы нет отдельной сборки, используйте совместимый релиз через Wine или виртуальную машину. Поля API остаются теми же: URL с <code>/v1</code>, ключ и имя модели.</p>`,
      en: `<h4>Windows</h4><p>Install the Windows Luna Translator build and open LLM settings.</p><h4>macOS / Linux</h4><p>If no native build is available, use a compatible release through Wine or a virtual machine. The API fields remain the same: a URL ending in <code>/v1</code>, token, and model.</p>`,
    },
  };

  function platformDetails(app, lang) {
    const note = platformNotes[app.name];
    if (!note) return "";

    const source = note[lang];
    const sections = [];
    const headingPattern = /<h4>(.*?)<\/h4>/g;
    let match;
    let previousEnd = 0;
    while ((match = headingPattern.exec(source))) {
      if (sections.length) sections[sections.length - 1].html = source.slice(previousEnd, match.index);
      sections.push({ label: match[1], html: "" });
      previousEnd = headingPattern.lastIndex;
    }
    if (sections.length) sections[sections.length - 1].html = source.slice(previousEnd);
    if (!sections.length) {
      sections.push({ label: lang === "ru" ? "Все системы" : "All systems", html: source });
    }

    const expanded = [];
    sections.forEach((section) => {
      const labels = section.label.split(/\s*\/\s*/).filter(Boolean);
      labels.forEach((label) => expanded.push({ label, html: section.html }));
    });
    const order = { macOS: 0, Windows: 1, Linux: 2 };
    expanded.sort((a, b) => (order[a.label] ?? 9) - (order[b.label] ?? 9));
    const tabs = expanded.map((section, index) => {
      const key = section.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return `<button type="button" class="system-tab${index === 0 ? " is-active" : ""}" data-system="${key}" role="tab" aria-selected="${index === 0}">${section.label}</button>`;
    }).join("");
    const panels = expanded.map((section, index) => {
      const key = section.label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
      return `<div class="system-panel${index === 0 ? " is-active" : ""}" data-system-panel="${key}" role="tabpanel">${section.html}</div>`;
    }).join("");
    return `<div class="platform-guide"><div class="platform-label">${lang === "ru" ? "Выберите систему" : "Choose your system"}</div><div class="system-tabs" role="tablist">${tabs}</div><div class="system-panels">${panels}</div></div>`;
  }

  function troubleshootingDetails(app, lang) {
    const ru = lang === "ru";
    if (app.name === "Codex (ChatGPT)") {
      return ru
        ? `<aside class="stuck-box"><div class="stuck-title"><span class="stuck-icon">?</span>Застряли?</div><div class="stuck-item"><strong>Ошибка 401 / сбой аутентификации</strong><p>Токен введён неправильно или содержит лишние пробелы. Убедитесь, что ключ имеет вид <code>sk-xxxx</code>.</p></div><div class="stuck-item"><strong>Connection error / обрыв потока</strong><p>Повторите запрос один раз. Если ошибка возвращается, перезапустите приложение и попробуйте другую модель.</p></div><div class="stuck-item"><strong>Неверный адрес или интерфейс</strong><p>Для Claude-совместимого подключения используйте адрес без <code>/v1</code>: <code>https://byesu.com</code>.</p></div><div class="stuck-item"><strong>Команда не запускается</strong><p>На Windows проверьте PowerShell/WSL и PATH, а на macOS/Linux права запуска, Homebrew или системные зависимости.</p></div></aside>`
        : `<aside class="stuck-box"><div class="stuck-title"><span class="stuck-icon">?</span>Stuck?</div><div class="stuck-item"><strong>401 error / authentication failure</strong><p>The token is incorrect or contains extra spaces. Make sure the key looks like <code>sk-xxxx</code>.</p></div><div class="stuck-item"><strong>Connection error / disconnected stream</strong><p>Retry once. If the error returns, restart the app and try another model.</p></div><div class="stuck-item"><strong>Wrong endpoint or interface</strong><p>For a Claude-compatible connection, use the URL without <code>/v1</code>: <code>https://byesu.com</code>.</p></div><div class="stuck-item"><strong>The command does not start</strong><p>On Windows check PowerShell/WSL and PATH; on macOS/Linux check execute permissions, Homebrew, and system dependencies.</p></div></aside>`;
    }
    const isClaude = /Claude|Anthropic/i.test(app.format + app.name);
    const isNewApi = /NewAPI/i.test(app.format);
    const endpointTip = isClaude
      ? (ru
        ? "Для Claude-совместимого подключения используйте адрес без /v1: https://byesu.com."
        : "For a Claude-compatible connection, use the URL without /v1: https://byesu.com.")
      : isNewApi
        ? (ru
          ? "Для NewAPI указывайте https://byesu.com без /v1, если клиент сам добавляет путь запроса."
          : "For NewAPI, use https://byesu.com without /v1 when the client appends the request path itself.")
        : (ru
          ? "Проверьте, что Base URL заканчивается на /v1, а wire_api равен responses. Не добавляйте /responses вручную."
          : "Make sure the Base URL ends in /v1 and wire_api is responses. Do not append /responses manually.");
    const retryTip = ru
      ? "Повторите запрос один раз. Если ошибка возвращается, перезапустите приложение и попробуйте другую модель."
      : "Retry once. If the error returns, restart the app and try another model.";
    const systemTip = ru
      ? "На Windows проверьте PowerShell/WSL и PATH, а на macOS/Linux права запуска, Homebrew или системные зависимости."
      : "On Windows check PowerShell/WSL and PATH; on macOS/Linux check execute permissions, Homebrew, and system dependencies.";
    return `<aside class="stuck-box"><div class="stuck-title"><span class="stuck-icon">?</span>${ru ? "Застряли?" : "Stuck?"}</div><div class="stuck-item"><strong>${ru ? "Ошибка 401 / сбой аутентификации" : "401 error / authentication failure"}</strong><p>${ru ? "Токен введён неправильно или содержит лишние пробелы. Убедитесь, что ключ имеет вид" : "The token is incorrect or contains extra spaces. Make sure the key looks like"} <code>sk-xxxx</code>.</p></div><div class="stuck-item"><strong>${ru ? "Connection error / обрыв потока" : "Connection error / disconnected stream"}</strong><p>${retryTip}</p></div><div class="stuck-item"><strong>${ru ? "Неверный адрес или интерфейс" : "Wrong endpoint or interface"}</strong><p>${endpointTip}</p></div><div class="stuck-item"><strong>${ru ? "Команда не запускается" : "The command does not start"}</strong><p>${systemTip}</p></div></aside>`;
  }

  function renderTroubleshootingGuides(lang) {
    const openCode = appGuides.find((app) => app.name === "OpenCode") || appGuides[0];
    return troubleshootingDetails(openCode, lang)
      .replace(/^<aside class="stuck-box">/, "")
      .replace(/<\/aside>$/, "")
      .replace(/<div class="stuck-title">[\s\S]*?<\/div>/, "");
  }

  function renderConnectionGuides(lang, extraGuides = []) {
    const apiLabel = lang === "ru" ? "Формат" : "Format";
    const modelLabel = lang === "ru" ? "Модель" : "Model";
    const allGuides = [...extraGuides, ...appGuides];
    return Object.keys(groups[lang])
      .map((group) => {
        const cards = allGuides
          .filter((app) => app.group === group)
          .map(
            (app) => `<details class="catalog-card full-guide-card">
              <summary><span><strong>${app.name}</strong><small>${lang === "ru" ? app.levelRu : app.levelEn}</small></span><span class="catalog-arrow">+</span></summary>
              <div class="catalog-card-body">
                <div class="connection-facts">
                  <span><b>${apiLabel}</b>${app.format}</span>
                  <span><b>Base URL</b><code>${app.baseUrl}</code></span>
                  <span><b>${modelLabel}</b><code>${app.model}</code></span>
                </div>
                <div class="full-guide-content">${platformDetails(app, lang)}${app[lang]}</div>
              </div>
            </details>`,
          )
          .join("");
        return `<div class="catalog-group"><h3>${groups[lang][group]}</h3><div class="catalog-grid full-guide-grid">${cards}</div></div>`;
      })
      .join("");
  }

  function updateGuide(guide, lang) {
    const originalCodex = guide.sections.find((section) => section.id === "codex");
    const codexErrors = guide.sections.find((section) => section.id === "codex-errors");
    guide.navigation = guide.navigation
      .filter((item) => item.id !== "models" && item.id !== "codex")
      .map((item) => {
        if (item.id === "clients") return { id: "connections", label: lang === "ru" ? "Подключение API" : "API connection" };
        if (item.id === "help") return { id: "help", label: lang === "ru" ? "Застряли?" : "Stuck?" };
        return item;
      });

    guide.sections = guide.sections.filter(
      (section) =>
        section.id !== "model-catalog" &&
        section.id !== "opencode" &&
        section.id !== "codex" &&
        section.id !== "codex-errors",
    );

    const catalog = guide.sections.find((section) => section.id === "client-catalog");
    catalog.id = "api-connections";
    catalog.view = "connections";
    catalog.title = lang === "ru" ? "Подключение API" : "API connection";
    catalog.note =
      lang === "ru"
        ? "Полные инструкции для приложений и способов подключения API."
        : "Complete API setup guides for supported applications.";
    const codexHtml = originalCodex ? originalCodex.html : "";
    const codexGuide = {
      group: "code",
      name: "Codex (ChatGPT)",
      levelRu: "Рекомендуемый вариант · подробная инструкция",
      levelEn: "Recommended option · full guide",
      format: "OpenAI / Responses",
      baseUrl: "https://byesu.com/v1",
      model: "gpt-5.6-terra",
      ru: lang === "ru" ? codexHtml : "",
      en: lang === "en" ? codexHtml : "",
      docs: "https://docs.byesu.com/ru/clients/codex-cli",
    };
    const helpSection = guide.sections.find((section) => section.id === "tips");
    if (helpSection) {
      helpSection.title = lang === "ru" ? "Частые ошибки" : "Common errors";
      helpSection.note = lang === "ru" ? "Частые ошибки и решения для всех подключений." : "Common errors and fixes for every connection.";
      helpSection.html = `<div class="stuck-box help-frame">${renderTroubleshootingGuides(lang)}${helpSection.html}</div>`;
    }
    catalog.html =
      (lang === "ru"
        ? "<p>Выберите приложение и раскройте карточку. Внутри находятся адрес API, команды, пути к файлам и пошаговая настройка. Инструкция Codex находится здесь же.</p>"
        : "<p>Select an application and open its card. Each card contains the API address, commands, file paths, and setup steps. The Codex guide is included here too.</p>") +
      renderConnectionGuides(lang, [codexGuide]);
    guide.primaryAction = {
      label: lang === "ru" ? "Открыть подключение API" : "Open API connection",
      href: "#api-connections",
    };
  }

  window.__applyConnectionGuideUpdates = () => {
    updateGuide(window.BUYER_GUIDE, "ru");
    updateGuide(window.BUYER_GUIDE_EN, "en");
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

window.__applyConnectionGuideUpdates();
