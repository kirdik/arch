
---
title: "Проблема с отображением времени в старых mp3 файлах"
date: 2026-03-15T13:08:43+03:00
draft: false

author: "Кирилл В. Чеботарёв"
tags: [""]
categories: [""]

description: ""
canonicalURL: ""

showToc: true
TocOpen: false
hidemeta: false
comments: false

disableHLJS: false
disableShare: false
hideSummary: false
searchHidden: false

ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
ShowRssButtonInSectionTermList: true
UseHugoToc: true

cover:
  image: "cover.webp"
  alt: ""
  caption: ""
  relative: true
  hidden: false
---

<!-- Текст статьи начинается здесь.
Картинки можно просто перетаскивать в эту папку. -->

<!--more-->
# 🛠 Проблема «прыгающего» времени в старых MP3

> [!abstract] Суть проблемы
> В старых оцифровках (кодек **MP3Pro** или **VBR**) плеер показывает одну длину файла, а аудиоредактор — другую. Метки времени съезжают, нарезать файл невозможно.

---

## 🔍 Шаг 1: Проверка через MediaInfo
Для пользователей Windows лучше всего подходит графическая версия **MediaInfo**.

> [!tip] Как смотреть
> 1. Откройте файл -> Меню **Вид** -> **Текст**.
> 2. Ищите строку **"Writing library"** (например, LAME 3.92) и **"Bit rate mode"** (VBR). 
> 3. Если видите сочетание старого кодека и VBR — заголовок файла поврежден.

---

## 🩹 Шаг 2: Исправление (Без потери качества)

> [!example] Способ А: MP3 Repair Tool (Windows)
> Утилита пересчитывает «оглавление» файла, не трогая сам звук. Качество остается 100% оригинальным.

> [!info] Способ Б: Через Audacity
> Если файл один:
> 1. Закиньте в **Audacity** (он видит реальную длину).
> 2. **Файл** -> **Экспорт** -> **MP3**.
> 3. Выберите режим битрейта **Постоянный (CBR)**.

---

## 💡 Советы архивисту
- [ ] Всегда делай копию в папку `Originals`.
- [ ] Если в плеере 5:00, а в редакторе 4:40 — файл болен, нужно лечить.
- [ ] Для новых записей используй **CBR 320 kbps**.