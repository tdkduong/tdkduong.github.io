---
title: "An Exploration of q-Analogues and Related Number Systems"
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
publication_types: ["expository article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: Written under the supervision of Prof. Peter Magyar over several months, this expository paper explores the combinatorial and algebraic foundations of q-analogues. The work systematically "quantizes" classical combinatorial numbers, validating the Gaussian (q-binomial) coefficients through vector space and lattice path interpretations. It extends this framework to q-Stirling numbers (Types A and B) and Carlitz's q-Bernoulli numbers, proving the fundamental q-Bernoulli-Stirling relation via p-adic integrals. The paper also examines q-Fibonacci numbers through the lens of layered matchings and pattern avoidance, concluding with an analysis of Type B q-Stirling numbers and their connection to symmetric polynomials.

# Summary. An optional shortened abstract.
summary:

tags:
  - Expository Article
featured: false

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

### Project Description: q-analog numbers

This expository article provides a comprehensive exploration of **q-analogues**, a process of "quantization" that transforms classical counting problems into polynomial frameworks over a parameter $q$. Developed under the guidance of **Prof. Peter Magyar**, the work covers four primary areas of enumerative combinatorics:

- **The Gaussian Coefficients:** The paper validates the q-binomial coefficients $[\begin{matrix}n\\ k\end{matrix}]_{q}$ as the central object of the theory. It details their multiple combinatorial interpretations, including the enumeration of $k$-dimensional subspaces in vector spaces over $\mathbb{F}_q$, area generation under lattice paths, and inversion statistics on bit strings.
- **q-Stirling and q-Bernoulli Numbers:** The project analyzes **Carlitz’s q-Stirling numbers** (Type A) and their relation to **q-Bernoulli numbers**. A key result presented is the **q-Bernoulli-Stirling relation**, proven using p-adic integral representations and q-falling factorial orthogonality.
- **q-Fibonacci Numbers:** The text explores q-Fibonacci numbers $F_n(q)$ as generating functions for the "right bigger" statistic on **layered matchings** (partitions avoiding patterns $13/2$ and $123$). It includes a combinatorial proof of the q-analog of the convolution identity for $F_{m+n}$.
- **Type B Extensions:** The scope extends to the hyperoctahedral group (Type B), defining q-analogues for **Type B Stirling numbers**. These are shown to satisfy recurrences involving "q-odd integers" $[2n+1]_q$ and are linked to elementary and homogeneous symmetric polynomials evaluated at q-integers.
