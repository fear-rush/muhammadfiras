---
title: 'CV-Roast: A Fun Way To Roast Your Work Experience'
description: 'CV-Roast is a fun project designed to humorously critique people’s CVs using a large language model (Llama3-8b-8192).'
keywords: ['CV critique', 'Llama3', 'FastAPI', 'Next.js', 'Docker', 'System Monitoring']
date: '2024-10-31'
heroimage:
    url: /assets/projects/cvroast/cvroast-heroimage.webp
    alt: 'Photo by Rainhard Wiesinger on Unsplash'
platform: Web
stack: ['Next.js', 'FastAPI', 'Docker', 'Llama3', 'Grafana', 'Loki', 'Prometheus', 'WireGuard', 'Portainer']
---
## Website

Check out CV-Roast in action:
[https://cv-roast.my.id/](https://cv-roast.my.id/)

## Overview

CV-Roast is a fun and quirky project designed to humorously critique people’s CVs using large language models (LLMs). The platform processes CV documents in `.pdf` format and provides playful feedback. Powered by the Llama3-8b-8192 model and custom system prompts, CV-Roast delivers entertaining and witty critiques, making the task of reviewing CVs more engaging and enjoyable. Thanks to [rasyidan](https://rsydn.tech) for making this project possible.


## How It Works

![System diagram](/assets/projects/cvroast/system-diagram.webp)

1. **Upload**: Users upload their CVs in `.pdf` format through the web interface.
2. **Processing**: The FastAPI backend validates and processes the uploaded document.
3. **LLM Analysis**: The Llama3 model generates a humorous critique using custom prompts tailored for CV analysis.
4. **Feedback**: The roasted feedback is displayed to the user via the web application.
5. **Monitoring and Security**: All operations are monitored in real time using Grafana and Prometheus, while WireGuard and Fail2Ban ensure secure and reliable service.

## Features

### LLM-Powered CV Analysis (Roast)
- Processes `.pdf` CV documents using Groq AI and Llama3-8b-8192.
- Generates humorous and detailed critiques based on custom system prompts.
- Aimed at making CV reviews fun and engaging.

### Robust Backend
- Developed using FastAPI for high-performance, asynchronous API handling.
- Containerized using Docker for consistency and ease of deployment.
- CI/CD workflows implemented using Watchtower to automate server image updates on Docker Hub.

### System Monitoring and Security
- Integrated Grafana, Loki, and Prometheus for real-time monitoring and log tracking.
- Configured WireGuard and Nginx Proxy Manager for secure communication and reverse proxy management.
- Implemented Fail2Ban to detect and block malicious IPs and bots, with real-time alerts via a Telegram bot.


