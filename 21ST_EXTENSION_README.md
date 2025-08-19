# 21st.dev Extension - Használati útmutató

## Mi ez?

A 21st.dev extension egy böngésző toolbar, ami összeköti a frontend UI-t az AI agentekkel a kódszerkesztőben.

## Telepítés

### 1. VS Code Extension
- Telepítsd a [21st Extension](https://open-vsx.org/extension/21st-dev/21st-extension)-t a VS Code-ba
- Vagy keresd meg: `21st-dev.21st-extension` az Extensions panelben

### 2. Toolbar Package
```bash
npm install -D @21st-extension/toolbar
```

## Használat

### Fejlesztői módban:
1. **Indítsd el a fejlesztői szervert**: `npm run dev`
2. **Nyisd meg a weboldalt** a böngészőben
3. **A toolbar automatikusan megjelenik** (fejlesztői módban)

### AI Agent használata:
1. **Válassz ki egy elemet** a weboldalon
2. **Kattints a toolbar-ra**
3. **Írj egy kommentet** az elemről
4. **Az AI agent automatikusan kapja meg** a kontextust

## Funkciók

✅ **DOM elemek kiválasztása** - Kattints bármely elemre  
✅ **Valós idejű kontextus** - Az AI látja a teljes DOM-ot  
✅ **Automatikus kapcsolódás** - VS Code extension-nal  
✅ **Fejlesztői mód csak** - Production-ben nem jelenik meg  

## Konfiguráció

A toolbar beállításai a `components/TwentyFirstToolbar.jsx` fájlban:

```jsx
const stagewiseConfig = {
  plugins: [],
  theme: 'light',        // 'light' vagy 'dark'
  position: 'bottom-right', // toolbar pozíció
  autoHide: false,       // mindig látható
};
```

## Támogatott AI Agentek

- ✅ Cursor
- ✅ GitHub Copilot  
- ✅ Windsurf
- ✅ Cline
- ✅ Roo Code
- ✅ Claude Code
- ✅ Gemini CLI
- ✅ Bármely AI Agent (Copy Prompt segítségével)

## Hibaelhárítás

### Ha nem működik:
1. **Ellenőrizd**, hogy a VS Code extension telepítve van-e
2. **Csak egy VS Code ablak** legyen nyitva
3. **Fejlesztői módban** vagy-e
4. **Console logok** ellenőrzése

### Console üzenetek:
- ✅ "21st Extension Toolbar initialized successfully"
- ❌ "Failed to initialize 21st Extension Toolbar"

## További információk

- [21st.dev Extension](https://open-vsx.org/extension/21st-dev/21st-extension)
- [Discord Community](https://discord.gg/21st-dev)
- [Support](mailto:support@21st.dev)

## License

AGPLv3 license - [Részletek](https://www.gnu.org/licenses/agpl-3.0.html)
