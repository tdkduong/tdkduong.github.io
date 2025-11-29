---
title: "Ramsey Numbers For Multicolor Cycles & Paths"
authors:
  - admin
author_notes:
  - "Equal contribution"
date: "2025-08-15T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-08-15T00:00:00Z"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["expository article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: This expository project provides a comparative survey of Ramsey numbers for sparse graphs, specifically paths ($P_n$) and cycles ($C_n$). It contrasts the behavior of two-color exact results against multicolor asymptotic bounds. For paths, the work details the proof of the Gerencsér-Gyárfás theorem and explores the linear growth of multicolor path Ramsey numbers via the connected matching method. For cycles, the analysis focuses on the sharp parity dichotomy in the two-color case and the resolution of the Bondy-Erdős conjecture for multicolor odd cycles using hypercube constructions. Key theoretical tools discussed include Szemerédi's Regularity Lemma and stability arguments.

# Summary. An optional shortened abstract.
summary:

tags:
  - Expository Article
featured: true

links:
  - name: "Ramsey Numbers For Multicolor Cycles"
    url: "/note/ramsey-numbers-research/ramsey-number-multicolor-cycles.pdf"
  - name: "Ramsey Numbers For Multicolor Paths"
    url: "/note/ramsey-numbers-research/ramsey-number-multicolor-paths.pdf"
url_pdf:
url_code:
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

This project investigates the Ramsey theory of **sparse graphs**, focusing on the structural differences between paths and cycles compared to classical cliques. While Ramsey numbers for cliques grow exponentially, this work demonstrates how paths and cycles exhibit linear growth, controlled by distinct structural thresholds.

The analysis is divided into two primary domains:

#### **1. Ramsey Numbers for Paths**

The study establishes that path Ramsey numbers are "well-behaved" but non-trivial.

- **Two-Color Exactness:** The project details the proof of the **Gerencsér-Gyárfás Theorem** ($R(P_n, P_m) = m + \lfloor n/2 \rfloor - 1$), utilizing a "split construction" lower bound where the obstruction is a bipartite graph with specific part sizes.
- **Multicolor Linearity:** It explores the bounds for $t$ colors, showing that $R_t(P_n) \approx tn$. The analysis highlights modern techniques, such as the **Connected Matching Method** and **Regularity Lemma**, used to prove that linear bounds persist despite the increasing number of colors.

#### **2. Ramsey Numbers for Cycles**

The work highlights the complexity introduced by cycle structure, particularly the role of parity.

- **The Parity Dichotomy:** For two colors, exact formulas differ significantly for odd ($2n-1$) versus even ($3n/2 - 1$) cycles.
- **Multicolor Thresholds:** A key focus is the resolution of the **Bondy-Erdős Conjecture** for odd cycles, where $R_k(C_n) = 2^{k-1}(n-1)+1$. The project explains the **Hypercube Construction** used for the lower bound, where vertices are labeled with binary strings to avoid odd cycles in specific color classes.
- **Even Cycles:** It reviews the current best linear bounds for multicolor even cycles, $(k-1)n \le R_k(C_{2n}) \le (k - 1/4)n$, noting the open problem of closing this gap.
