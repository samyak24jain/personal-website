---
title: "RAG Question Answering with LangChain"
description: "A retrieval-augmented QA system using FLAN-T5 and FAISS vector search, orchestrated with LangChain."
date: "Mar 14 2024"
repoURL: "https://github.com/samyak24jain/RAG-LangChain-QA"
---

A retrieval-augmented generation (RAG) pipeline for question answering over a
custom document corpus.

It combines Google's FLAN-T5 model with a Facebook AI Similarity Search (FAISS)
vector database, orchestrated in LangChain — documents are embedded and indexed,
the most relevant chunks are retrieved for a query, and the model generates an
answer grounded in that retrieved context.
