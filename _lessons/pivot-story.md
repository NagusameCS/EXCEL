---
layout: lesson
title: Pivot Storyboard
pitch: Learners pilot their first pivot table to surface insights from classroom exit tickets.
goal: Summarize categorical data with pivot rows, columns, and values.
tool: Pivot Tables
difficulty: Trailblazer
duration: 18
icon: pivot_table_chart
dataset:
  description: Exit ticket log with topic tags and 1–5 understanding ratings.
  headers:
    - Student
    - Track
    - Topic
    - Rating
  rows:
    - [Ivy, AM, Charts, 4]
    - [Leo, PM, Cleaning, 3]
    - [Maya, AM, Charts, 5]
    - [Noor, PM, Lookup, 2]
    - [Omar, AM, Charts, 3]
    - [Pia, AM, Cleaning, 4]
    - [Ravi, PM, Lookup, 5]
challenges:
  - title: Highest-need topics
    mode: Studio
    prompt: "Build a pivot that shows average rating per Topic, filtered to each Track."
    steps:
      - Insert a pivot table referencing the entire log.
      - Drag Topic to Rows, Track to Filters, Rating to Values (Average).
      - Which topic has the lowest rating overall?
    validator:
      type: text
      answer: "Lookup"
      hint: Ratings for Lookup average 3.5 while others are higher.
  - title: Track briefing
    mode: Studio
    prompt: "Directors want to know which Track struggles the most."
    steps:
      - Duplicate the pivot.
      - Move Track to Rows, Topic to Columns, keep Rating as Average.
      - Identify the Track with the lowest average across all topics.
    validator:
      type: text
      answer: "PM"
      hint: When you average across all topics, the PM cohort trails AM.
resources:
  - label: Pivot table quick start
    url: https://support.microsoft.com/office/pivot-table-overview-f1a1004b-973a-4e70-bb56-8d1b37d6b9d6
upnext:
  - Ask learners to calculate % of total with Show Values As.
  - Introduce slicers tied to Track for faster filtering.
---

This lesson puts students in the role of an instructional coach reviewing exit tickets. They already trust tables; now they need a repeatable way to summarize categorical data and spotlight struggling tracks.
