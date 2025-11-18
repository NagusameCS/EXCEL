---
layout: lesson
title: Lesson Title
slug: lesson-template
pitch: One-sentence hook about the learner mission.
goal: Desired measurable learner outcome.
tool: "Tool focus (ex: Pivot Tables)"
difficulty: Explorer
icon: calculate
duration: 15
dataset:
  description: Short note for facilitators/learners.
  headers:
    - Column A
    - Column B
  rows:
    - [Sample, Data]
challenges:
  - title: Core objective
    mode: Puzzle
    prompt: Describe what learners must produce.
    steps:
      - Step learners should take.
      - Another step.
    validator:
      type: text
      answer: "Expected answer or formula"
      hint: Give a nudge, not the answer.
resources:
  - label: Example resource
    url: https://example.com
upnext:
  - Optional extension idea.
---

Use this markdown file as a starting point. Duplicate it into `_lessons/your-slug.md`, then update metadata, dataset, and challenge details. Content below the front matter renders inside the Scenario section; keep it conversational and actionable.
