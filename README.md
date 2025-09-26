# 🏎️ ApexCore — On-Device AI with Racecraft Precision

_ApexCore_ is a high-performance, privacy-first AI assistant rebuilt from the original PocketPal AI. Designed exclusively for Android, it runs small language models (SLMs) entirely on-device — no cloud, no compromise. With a redesigned UI, telemetry-grade benchmarking, and customizable AI personas, ApexCore puts you in control like a race engineer with a neural pitwall.

> 🛠️ Built for self-experimenters, developers, and anyone who wants full control over their AI experience.

---

## 🧠 Core Features

- 🔒 **Offline AI**: Run SLMs locally with zero internet dependency.
- 🧪 **Benchmarking Suite**: Compare model performance across devices with reproducible metrics.
- 🎨 **Modern UI Overhaul**: Sleek, responsive interface optimized for multitasking.
- 🧬 **Custom Personas**: Create AI assistants with tailored system prompts and roles.
- 🚀 **Hugging Face Integration**: Browse and download GGUF models directly from HF.
- 📊 **Telemetry Dashboard**: View tokens/sec, memory usage, and inference latency in real time.
- 🌐 **Localization**: Supports multiple languages including Japanese and Chinese.
- 📱 **Optimized for Android Devices**: Runs smoothly across a wide range of Android phones and tablets.

---

## 📲 Installation

Download ApexCore from Google Play or sideload via F-Droid.

---

## 🧭 Usage Guide

### 🔄 Downloading Models
- Tap ☰ → Models → Download from list or Hugging Face.
- Supports Danube, Phi, Gemma, Qwen, and other GGUF formats.

### ⚙️ Loading Models
- Tap “Load” next to a downloaded model.
- Or use the chevron icon in the chat input to switch models on the fly.

### 💬 Chatting
- Navigate to Chat → Select a model → Start conversing.
- Screen stays awake during inference for uninterrupted flow.

### ✍️ Message Editing
- Long-press your message → Edit → Retry generation.
- Compare outputs across models with one tap.

### 🧑‍🔧 Using Pals
- Create Assistant or Roleplay Pals with custom prompts, roles, and UI themes.
- Switch personas instantly via the Pal picker.

---

## 🧪 Benchmarking

- Navigate to Benchmarking → Run tests on loaded models.
- Metrics include:
  - Tokens/sec
  - Memory footprint
  - Latency per token
- Share results to the ApexCore Leaderboard and compare across devices.

---

## 🔐 Hugging Face Token Setup

To access gated models:
1. Get your token from Hugging Face.
2. In ApexCore → Settings → “Set Token” → Paste & Save.

---

## 📣 Feedback

We value your input:
- App Info → “Share Your Thoughts” → Submit feedback, feature requests, or bug reports.

---

## 🧑‍💻 Development Scripts

```bash
# Start Metro Bundler
yarn start

# Clean build artifacts
yarn clean

# Lint and type check
yarn lint
yarn typecheck

# Run tests
yarn test
```

---

## 🤝 Contributing

We welcome all contributions! Whether you're fixing bugs, adding features, or improving documentation, your input is valued.

### Quick Start

```bash
# Fork the repository
git clone https://github.com/YOUR_USERNAME/apexcore
cd apexcore

# Create a new branch
git checkout -b feature/your-feature-name

# Make your changes
yarn android

# Lint and type check
yarn lint
yarn typecheck

# Commit using Conventional Commits
git commit -m "feat: add new model support"

# Push and open a pull request
git push origin feature/your-feature-name
```

Please read our [Code of Conduct](./CODE_OF_CONDUCT.md) and [Contributing Guide](./CONTRIBUTING.md) before submitting PRs.

---

## 🗺️ Roadmap

- 🧠 Support for additional SLMs
- 🎨 UI/UX refinements and animations
- 📚 Enhanced documentation and onboarding
- ⚡ Performance tuning across Android devices
- 🌍 Expanded language support
- 🧯 Robust error handling and recovery
- 📊 Advanced benchmarking visualizations

Feel free to open issues to suggest features or report bugs.

---

## 📜 License

This project is licensed under the MIT License.

```text
MIT License

Copyright (c) 2025 Akshat Vyas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

> ApexCore builds upon PocketPal AI by [THE-AAV](https://github.com/THE-AAV/Edgemark-AI) under the MIT License.

---

## 🏁 Final Lap

Whether you're benchmarking models or roleplaying with custom AI personas, ApexCore puts you in pole position. No cloud. No compromise. Just pure, on-device intelligence.
