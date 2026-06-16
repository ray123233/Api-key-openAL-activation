window.BUYER_GUIDE = {
  lang: "ru",
  author: "ray127polite1",
  pageTitle: "Инструкция по использованию API key GPT Plus",
  eyebrow: "Windows / macOS · API инструкция",
  title: "Инструкция по использованию API key GPT Plus",
  subtitle:
    "Пошаговая инструкция для подключения API key в Codex и Opencode на Windows и macOS. Просто повторяйте шаги по порядку.",
  primaryAction: {
    label: "Начать настройку",
    href: "#codex",
  },
  secondaryActionLabel: "Открыть шаги",
  meta: [
    { label: "Подходит для", value: "Codex / Opencode" },
    { label: "Система", value: "Windows / macOS" },
    { label: "Настройка", value: "5-10 минут" },
  ],
  sections: [
    {
      id: "intro",
      title: "Что понадобится",
      note: "Коротко перед началом настройки.",
      html:
        "<p>Для начала работы вам нужен выданный API key OpenAI.</p>",
    },
    {
      id: "codex",
      title: "Codex",
      note: "Настройка API key для Codex.",
      html:
        "<p><strong>1.</strong> В папке <code>Codex (~/.codex/)</code> создайте текстовый документ и переименуйте его в <code>config.toml</code>.</p>" +
        "<p>Путь должен быть таким: <code>~/.codex/config.toml</code></p>" +
        "<p>После этого вставьте в файл следующую конфигурацию:</p>" +
        "<pre><code>model_provider = \"OpenAI\"\nmodel = \"gpt-5.5\"\nreview_model = \"gpt-5.5\"\nmodel_reasoning_effort = \"xhigh\"\ndisable_response_storage = true\nnetwork_access = \"enabled\"\nwindows_wsl_setup_acknowledged = true\n\n[model_providers.OpenAI]\nname = \"OpenAI\"\nbase_url = \"https://api.byesu.com\"\nwire_api = \"responses\"\nrequires_openai_auth = true\n\n[features]\ngoals = true</code></pre>" +
        "<p><strong>2.</strong> После этого в той же папке <code>Codex (~/.codex/)</code> откройте файл <code>auth.json</code> и вставьте туда:</p>" +
        "<pre><code>{\n  \"OPENAI_API_KEY\": \"ваш_апи_ключ\"\n}</code></pre>" +
        "<p><strong>3.</strong> После этого все готово, можно пользоваться.</p>",
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
  tips: [
    {
      title: "Ссылка для покупателей",
      text: "После публикации на GitHub Pages ты просто отдаешь покупателям одну ссылку на эту инструкцию.",
    },
    {
      title: "Где редактировать сайт",
      text: "Главный текст сайта лежит в файле <code>site-content.js</code>.",
    },
    {
      title: "Что можно добавить",
      text: "Можно позже вставить дополнительные примеры или полезные примечания.",
    },
  ],
  footerNote:
    "Инструкция подготовлена для быстрого подключения API key. При необходимости текст можно дополнять и обновлять.",
};
