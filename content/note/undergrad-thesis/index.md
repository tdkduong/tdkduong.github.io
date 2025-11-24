---
title: "Fundamental about Ramsey Numbers, Ramsey Theory
and Their Combinatorial Significance"
authors:
  - admin
author_notes:
  - "Equal contribution"
date: "2024-12-15T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-08-01T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["undergraduate thesis"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: Completed under the supervision of Prof. Leonid Chekhov, this undergraduate thesis provides a rigorous survey of Ramsey Theory, focusing on the interplay between order and disorder in graph structures. The work establishes fundamental results, including the proof of Ramsey’s Theorem and the Erdős-Szekeres bound. It presents detailed proofs for exact Ramsey numbers—specifically $R(3,3)$, $R(3,4)$, $R(3,5)$, and $R(4,4)$—by combining recursive upper bounds with explicit graph constructions (lower bounds). Furthermore, the thesis explores the probabilistic method for establishing asymptotic lower bounds and analyzes multicolor Ramsey numbers, including the proof for $R_3(3,3,3)=17$.

# Summary. An optional shortened abstract.
summary:

tags:
  - Expository Article
  - Undergraduate Thesis
featured: true

# links:
# - name: ""
#   url: ""
url_pdf: "/note/q-analog-ra/q-analog.pdf"
url_code: ""
url_dataset: ""
url_poster: ""
url_project: ""
url_slides: ""
url_source: ""
url_video: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  caption: "Image credit: [**Unsplash**](https://unsplash.com/photos/jdD8gXaTZsc)"
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: example
---

### Project Description

This thesis presents a comprehensive mathematical analysis of **Ramsey Theory**, a field of combinatorics studying the conditions under which order must appear in large substructures. Conducted under the supervision of **Prof. Leonid Chekhov**, the research focuses on the determination of Ramsey numbers $R(s,t)$—the minimum graph size ensuring a monochromatic clique of size $s$ or $t$.

The work is structured around three key mathematical pillars:

- **Exact Values and Graph Constructions:** The thesis provides step-by-step proofs for known Ramsey numbers, establishing that $R(3,3)=6$, $R(3,4)=9$, $R(3,5)=14$, and $R(4,4)=18$.

  - **Upper Bounds:** Derived using the recurrence $R(s,t) \le R(s-1,t) + R(s,t-1)$[cite: 380].
  - **Lower Bounds:** Established by constructing explicit "counterexample" graphs (e.g., cyclic graphs based on modulo arithmetic) that avoid monochromatic cliques of the specified sizes[cite: 508, 532].

- **Probabilistic Methods and Asymptotics:** Beyond small integers, the thesis explores the foundational work of Paul Erdős. It details the **Probabilistic Method** to prove the exponential lower bound $R(k,k) > 2^{k/2}$, demonstrating that random edge colorings avoid monochromatic cliques with high probability.

- **Multicolor Extensions:** The scope extends to **Multicolor Ramsey Numbers**, specifically proving that $R_3(3,3,3)=17$. This involves demonstrating that any 3-coloring of a complete graph with 17 vertices must contain a monochromatic triangle.
