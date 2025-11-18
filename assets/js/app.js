(() => {
  const storageKey = "excelQuestProgress";
  const state = (() => {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || { lessons: {} };
    } catch (err) {
      console.warn("Progress state corrupt, resetting", err);
      return { lessons: {} };
    }
  })();

  const saveState = () => localStorage.setItem(storageKey, JSON.stringify(state));

  const getLessonSlug = (node) => node?.dataset?.lessonSlug;

  const syncLessonCards = () => {
    document.querySelectorAll("[data-lesson-slug]").forEach((card) => {
      const slug = getLessonSlug(card);
      if (!slug) return;
      const pill = card.querySelector("[data-progress-pill]");
      const status = state.lessons[slug]?.status;
      if (!pill) return;
      if (status === "complete") {
        pill.textContent = "Done";
        pill.classList.add("is-complete");
      } else {
        pill.textContent = "New";
        pill.classList.remove("is-complete");
      }
    });
  };

  const renderProgressPanel = () => {
    const list = document.querySelector("[data-progress-list]");
    if (!list) return;
    list.innerHTML = "";
    const entries = Object.entries(state.lessons);
    if (!entries.length) {
      const empty = document.createElement("li");
      empty.textContent = "Complete a puzzle to see progress.";
      list.appendChild(empty);
      return;
    }
    entries.forEach(([slug, meta]) => {
      const li = document.createElement("li");
      const label = document.createElement("span");
      label.textContent = slug.replaceAll("-", " ");
      const status = document.createElement("span");
      status.textContent = meta.status === "complete" ? "✓" : "•";
      li.append(label, status);
      list.appendChild(li);
    });
  };

  const handleChallengeCheck = (button) => {
    const challenge = button.closest(".challenge");
    if (!challenge) return;
    const input = challenge.querySelector("input");
    const feedback = challenge.querySelector("[data-feedback]");
    const expected = (challenge.dataset.expected || "").trim().toUpperCase();
    const type = challenge.dataset.validatorType || "text";
    const lessonArticle = button.closest("[data-lesson-slug]");
    const slug = getLessonSlug(lessonArticle);
    const userAnswer = (input?.value || "").trim();
    const normalized = type === "number" ? userAnswer : userAnswer.toUpperCase();

    if (!input || !feedback) return;

    if (!userAnswer) {
      feedback.textContent = "Enter an answer first.";
      feedback.classList.remove("is-correct", "is-wrong");
      return;
    }

    const passes = type === "number"
      ? Number(normalized) === Number(expected)
      : normalized === expected;

    if (passes) {
      feedback.textContent = "Great! That matches the expected solution.";
      feedback.classList.add("is-correct");
      feedback.classList.remove("is-wrong");
      challenge.dataset.state = "complete";
    } else {
      feedback.textContent = "Not quite. Check your references and try again.";
      feedback.classList.add("is-wrong");
      feedback.classList.remove("is-correct");
      challenge.dataset.state = "incomplete";
    }

    if (passes && slug) {
      const remaining = lessonArticle?.querySelectorAll('.challenge[data-state="complete"]').length;
      const total = lessonArticle?.querySelectorAll(".challenge").length;
      if (remaining === total) {
        state.lessons[slug] = { status: "complete", completedAt: Date.now() };
        saveState();
        syncLessonCards();
        renderProgressPanel();
      }
    }
  };

  const bindChallengeButtons = () => {
    document.querySelectorAll("[data-check-button]").forEach((btn) => {
      btn.addEventListener("click", () => handleChallengeCheck(btn));
    });
  };

  const bindProgressPanel = () => {
    const toggle = document.querySelector("[data-progress-toggle]");
    const panel = document.querySelector("[data-progress-panel]");
    if (!toggle || !panel) return;
    toggle.addEventListener("click", () => {
      panel.classList.toggle("is-open");
    });
    const reset = document.querySelector("[data-progress-reset]");
    reset?.addEventListener("click", () => {
      state.lessons = {};
      saveState();
      renderProgressPanel();
      syncLessonCards();
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    syncLessonCards();
    renderProgressPanel();
    bindChallengeButtons();
    bindProgressPanel();
  });
})();
