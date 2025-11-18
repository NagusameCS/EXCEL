---
layout: lesson
title: SUM Sprint
pitch: Warm new learners up with a real payroll table while reinforcing range selection muscle memory.
goal: Learners reference ranges and watch auto-fill patterns.
tool: Core Formulas
difficulty: Explorer
duration: 12
icon: functions
dataset:
  description: Timesheet export shared by the People team.
  headers:
    - Teammate
    - Hours
    - Rate
  rows:
    - [Ana, 12, 42]
    - [Ben, 10, 38]
    - [Carmen, 8, 40]
    - [Dina, 15, 45]
    - [Eli, 11, 39]
challenges:
  - title: Payroll totalizer
    mode: Puzzle
    prompt: "Finance needs total payroll cost. Use a single formula to multiply hours by rate and total the results."
    steps:
      - Insert a column named Total in D1 and write a formula in D2 that multiplies Hours by Rate.
      - Fill the formula down without breaking references.
      - In cell D7, return the grand total with one formula referencing the range in column D.
    validator:
      type: text
      answer: "=SUMPRODUCT(B2:B6,C2:C6)"
      hint: SUM by itself misses the multiplication. Can you combine SUM with another function?
resources:
  - label: SUMPRODUCT documentation
    url: https://support.microsoft.com/office/sumproduct-function-7822238c-7f3c-43b3-8274-1e86a9e0a6ef
  - label: Handout template (Google Sheets)
    url: https://docs.google.com/spreadsheets/u/0/
upnext:
  - Swap in overtime rates and discuss IF logic.
  - Challenge learners to use structured references in Excel Tables.
---

You are the payroll specialist on a five-person marketing team. Finance exported this table but needs a fast way to see the total payout. Learners should build confidence selecting matching ranges and understanding how relative and absolute references impact the result.
