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

## Problem A2

### Statement

Find the largest real number $a$ and the smallest real number $b$ such that

$$
ax(\pi - x) \leq \sin(x) \leq bx(\pi - x)
$$

for all $x$ in the interval $[0, \pi]$.

### Solution

Consider function $f(x) = \frac{\sin(x)}{x(\pi - x)}$. Since both numerator and denominator are symmetric about $\frac{\pi}{2}$, then we can the function on the interval $(0,\frac{π}{2}​]$, furthermore we can extend it to $0$ by setting $f(0) = \frac{1}{\pi}$.

Note that, $f'(x) = \frac{g(x)}{x^2(\pi - x)^2}$, where $g(x) = x(\pi − x) \cos(x) − (\pi − 2x)\sin(x)$. In fact, for $x \in (0, \frac{\pi}{2})$, $g(x) > 0$, since we have $g(0) = g(\frac{\pi}{2}) = 0$ and $g'(x) = (x^2 - \pi x + 2)\sin(x)$. The sign of $g'(x)$ depends on $(x^2 - \pi x + 2)$, and we now consider its roots, which are $\frac{\pi \pm \sqrt{\pi^2 - 8}}{2}$. There is only one root in the range, and when $x \in (0, \frac{\pi - \sqrt{\pi^2 - 8}}{2})$, $g'(x) > 0$ and when $x \in (\frac{\pi - \sqrt{\pi^2 - 8}}{2}, \frac{\pi}{2})$, $g'(x) < 0$. Since $g(0) = g(\frac{\pi}{2}) = 0$, we have $g(x) > 0$ when $x \in [0, \frac{\pi}{2}]$. Thus, $f(x)$ is increasing in $[0, \frac{\pi}{2}]$, hence it achieves a minimum at $a = f(0) = \frac{1}{\pi}$ and a maximum at $b = f(\frac{\pi}{2}) = \frac{4}{π^2}$.
