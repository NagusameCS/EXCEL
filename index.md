---
layout: default
title: Excel Quest
---

<section class="hero">
  <div>
    <p class="eyebrow">Excel puzzles, code.org style</p>
    <h1>Guide learners from clicks to confident formulas.</h1>
    <p>Each lesson ships with a ready-to-play dataset, a structured mission, and an instant checker so facilitators can focus on coaching.</p>
    <div class="hero-actions">
      <a class="cta" href="#lessons">Browse lessons</a>
      <a class="ghost" href="#blueprint">Blueprint</a>
    </div>
  </div>
  <div class="hero-card">
    <p>Author-friendly</p>
    <ul>
      <li><span class="material-symbols-rounded">bolt</span>Front matter defines metadata & puzzle inputs.</li>
      <li><span class="material-symbols-rounded">view_list</span>Dataset grids render automatically.</li>
      <li><span class="material-symbols-rounded">task_alt</span>Validators give instant feedback.</li>
    </ul>
  </div>
</section>

<section id="blueprint" class="blueprint">
  <h2>Lesson blueprint</h2>
  <div class="blueprint-grid">
    <article>
      <h3>1. Context</h3>
      <p>Define tool focus, difficulty, and scenario so learners immediately know the why.</p>
    </article>
    <article>
      <h3>2. Dataset</h3>
      <p>Describe a lightweight table in YAML—headers & rows become an interactive grid.</p>
    </article>
    <article>
      <h3>3. Mission</h3>
      <p>Set a puzzle with checkpoints and an expected formula or value for autograding.</p>
    </article>
    <article>
      <h3>4. Debrief</h3>
      <p>Offer hints, stretch ideas, and supporting resources. All in one markdown file.</p>
    </article>
  </div>
</section>

<section id="lessons" class="lesson-grid">
  <div class="section-title">
    <h2>Starter lessons</h2>
    <p>Each card is powered by `_lessons/slug.md`. Duplicate, edit metadata, and you have a new activity.</p>
  </div>
  <div class="cards">
    {%- assign sorted_lessons = site.lessons | sort: 'difficulty' -%}
    {%- for lesson in sorted_lessons -%}
      {% include lesson-card.html lesson=lesson %}
    {%- endfor -%}
  </div>
</section>

<section id="tracks" class="tracks">
  <h2>Guided tracks</h2>
  <div class="track-grid">
    {%- for track in site.data.tracks -%}
      <article class="track">
        <div class="track-head">
          <span class="material-symbols-rounded" aria-hidden="true">{{ track.icon }}</span>
          <div>
            <p class="eyebrow">{{ track.level }}</p>
            <h3>{{ track.title }}</h3>
          </div>
        </div>
        <p>{{ track.summary }}</p>
        <ul>
          {%- for item in track.focus -%}
            <li>{{ item }}</li>
          {%- endfor -%}
        </ul>
      </article>
    {%- endfor -%}
  </div>
</section>

<section id="toolkit" class="toolkit">
  <h2>Toolkit</h2>
  <div class="toolkit-grid">
    <article>
      <h3>Lesson template</h3>
      <p>Copy `lesson-template.md` into `_lessons/your-lesson.md`.</p>
      <a href="{{ '/lesson-template/' | relative_url }}">Preview template</a>
    </article>
    <article>
      <h3>Author checklist</h3>
      <ul>
        <li>✅ Title + short pitch</li>
        <li>✅ Dataset headers & rows</li>
        <li>✅ Validator answer + hint</li>
        <li>✅ Stretch idea</li>
      </ul>
    </article>
    <article>
      <h3>Extensible</h3>
      <p>Need multiple puzzles per lesson? Add more `challenge` blocks—JS auto-wires inputs.</p>
    </article>
  </div>
</section>
