---
title: Putnam 2025 Problems and Solutions
summary: Putnam 2025 Problems and Solutions
date: 2025-12-10

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
# image:
#   caption: "Image credit: [**Unsplash**](https://unsplash.com)"

# cover:
#   image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2560"
#   position:
#     x: 50
#     y: 40
#   overlay:
#     enabled: true
#     type: "gradient"
#     opacity: 0.4
#     gradient: "bottom"
#   fade:
#     enabled: true
#     height: "80px"
#   icon:
#     name: "✨"

authors:
  - admin

tags:
  - Putnam
  - Putnam 2025

content_meta:
  trending: true
---

## Problem A1

### Statement

Let $m_0$ and $n_0$ be distinct positive integers. For every positive integer $k$, define $m_k$ and $n_k$ to be the relatively prime positive integers such that

$$
\frac{m_{k}}{n_{k}} = \frac{2m_{k-1} + 1}{2n_{k-1} + 1}.
$$

Prove that $2m_{k} + 1$ and $2n_{k} + 1$ are relatively prime for all but finitely many positive integers $k$.

### Solution

Let $d_k = \gcd(2m_{k} + 1, 2n_{k} + 1)$. Then, $d_k$ must be odd. For any integer $x$, let $\operatorname{Odd}(x)$ be the greatest odd factor of $x$. We consider the sequence $\operatorname{Odd}(n_k - m_k)$:

$$
\operatorname{Odd}(n_k - m_k) = \operatorname{Odd}\left(\frac{2n_{k - 1} + 1}{d_k} - \frac{2m_{ - 1} + 1}{d_k}\right) = \operatorname{Odd}\left(\frac{n_{k - 1} - m_{k - 1}}{d_k}\right) \leq \operatorname{Odd}(n_{k - 1} - m_{k - 1})
$$

Thus, $\operatorname{Odd}(n_k - m_k)$ form a non-increasing sequence of positive integer, and the equality holds only when for $d_k = 1$. Hence, the sequence must stablize for a $k$ that is great enough (if $k > A$ for some $A$, then $d_k = 1$), thus $2m_{k} + 1$ and $2n_{k} + 1$ are relatively prime for great enough $k$.
