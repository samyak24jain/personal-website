---
title: "Graph-based Planning System for LLMs"
description: "A graph neural network that retrieves structured plans to improve LLM reasoning on multi-hop question answering."
date: "Sep 01 2024"
---

A research project (in collaboration with Meta AI) on improving the planning and
long-horizon reasoning of large language models.

I trained a text encoder together with a Graph Neural Network (GNN) in PyTorch to
retrieve graph-structured plans, which the LLM then uses to reason over multi-hop
question-answering tasks. Grounding generation in an explicit, retrieved plan
improves complex reasoning compared to free-form prompting.
