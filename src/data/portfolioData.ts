import { Project, Service, ToolItem, StatItem } from '../types';

export const OWNER_INFO = {
  name: 'Tahir Iqbal',
  role: 'Python Developer',
  email: 'Tahiriqbalpro@gmail.com',
  githubPlaceholder: 'https://github.com/tahir-iqbal-dev',
  linkedinPlaceholder: 'https://linkedin.com/in/tahir-iqbal-python',
  heroHeading: 'I Build Voice Assistants and Web Tools',
  shortBio: 'I build voice assistants and web tools.',
  aboutBio: `I am Tahir Iqbal, a Python developer with a sharp focus on voice-controlled assistants, custom web utilities, and Linux scripting. With 1 year of hands-on coding, I build practical software that automates repetitive workflows and enables natural voice interaction. I believe in clean code, robust terminal-driven development, and straightforward user experiences.`,
  portraitImage: '/src/assets/images/tahir_real_portrait_1792084471199.jpg'
};

export const STATS_DATA: StatItem[] = [
  {
    number: '05',
    label: 'Projects Built',
    subtext: 'Voice assistants, automation scripts & web tools'
  },
  {
    number: '01',
    label: 'Year of Experience',
    subtext: 'Hands-on Python, Linux & system engineering'
  },
  {
    number: '03',
    label: 'Core Dev Tools',
    subtext: 'Mastery in Python, Linux, and Git workflows'
  },
  {
    number: '100%',
    label: 'Dedicated Focus',
    subtext: 'Specialized in voice AI & terminal automation'
  }
];

export const TOOLS_DATA: ToolItem[] = [
  {
    id: 'python',
    name: 'Python',
    category: 'Core Language',
    experienceLevel: 'Primary Stack',
    description: 'My main programming language. Used for voice assistant logic, audio signal processing, RESTful APIs, data manipulation, and automation pipelines.',
    keyUseCases: [
      'Speech recognition & audio capture handling',
      'Text-to-speech voice generation & intent matching',
      'Web scrapers, parsers, and API integrations',
      'CLI tools with rich terminal formatting'
    ],
    sampleCodeOrCommand: {
      language: 'python',
      code: `import speech_recognition as sr
import pyttsx3

engine = pyttsx3.init()
engine.setProperty('rate', 175)

def speak(text: str):
    print(f"[Jarvis]: {text}")
    engine.say(text)
    engine.runAndWait()

def listen_command() -> str:
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        recognizer.adjust_for_ambient_noise(source, duration=0.6)
        audio = recognizer.listen(source, timeout=5)
    return recognizer.recognize_google(audio).lower()`,
      explanation: 'Core audio loop implementation for voice command recognition and spoken response.'
    }
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'Environment & Scripting',
    experienceLevel: 'Daily Environment',
    description: 'My operating system of choice for engineering and server deployments. Proficient with bash scripting, cron task scheduling, and process management.',
    keyUseCases: [
      'Bash automation scripts for system maintenance',
      'Systemd service unit creation for background daemons',
      'Cron job scheduling for automated data syncs',
      'Terminal-first development with Unix utilities (awk, sed, grep)'
    ],
    sampleCodeOrCommand: {
      language: 'bash',
      code: `#!/usr/bin/env bash
# Production daemon setup for Jarvis Voice Assistant
cat << 'EOF' > /etc/systemd/system/jarvis-assistant.service
[Unit]
Description=Jarvis Python Voice Assistant Daemon
After=network.target sound.target

[Service]
Type=simple
User=tahir
WorkingDirectory=/home/tahir/apps/jarvis
ExecStart=/usr/bin/python3 -u main.py
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload && systemctl enable --now jarvis-assistant`,
      explanation: 'Linux systemd configuration ensuring the assistant runs reliably as a background service.'
    }
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Version Control',
    experienceLevel: 'Workflow Tool',
    description: 'Essential for tracking code iterations, managing feature branches, maintaining clean commit histories, and collaborating on repositories.',
    keyUseCases: [
      'Clean atomic commit history for project milestones',
      'Branching workflows for experimental voice models',
      'Remote synchronization and backup on GitHub',
      'Release tagging and changelog tracking'
    ],
    sampleCodeOrCommand: {
      language: 'bash',
      code: `# Typical workflow: Feature branching & milestone tagging
git checkout -b feature/voice-wake-word
git add src/wake_word.py tests/test_audio.py
git commit -m "feat(audio): implement energy-threshold wake detection"
git push origin feature/voice-wake-word
git tag -a v1.2.0 -m "Release v1.2.0: Added offline voice wake engine"`,
      explanation: 'Structured version control workflow maintaining production-ready repositories.'
    }
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'web-dev',
    title: 'Web Development',
    subtitle: 'Fast, responsive & API-driven interfaces',
    description: 'Building custom web tools and interactive interfaces powered by clean Python backends. Fast loading, responsive on all screens, and cleanly integrated with real APIs.',
    deliverables: [
      'Custom single-page web applications',
      'Python backends (FastAPI / Flask)',
      'API design, data endpoints & integration',
      'Clean responsive UI with modern CSS'
    ],
    icon: 'Globe'
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    subtitle: 'Voice assistants & intelligent automation',
    description: 'Creating customized voice assistants and natural language command systems. Converting speech to actions, executing desktop automation, and intelligent task assistants.',
    deliverables: [
      'Voice-controlled desktop & web assistants',
      'Speech recognition & audio command parsers',
      'Text-to-speech feedback & customized voices',
      'Workflow automation agents and bot triggers'
    ],
    icon: 'Bot'
  },
  {
    id: 'linux-scripting',
    title: 'Linux Scripting',
    subtitle: 'System automation & terminal utilities',
    description: 'Authoring dependable Bash and Python scripts for Linux environments. Automating server maintenance, log monitoring, backups, and background daemon services.',
    deliverables: [
      'Automated backup and log rotation scripts',
      'Systemd service daemons and background tasks',
      'Scheduled cron job management',
      'Environment setup and deployment scripts'
    ],
    icon: 'Terminal'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'jarvis-ai',
    title: 'Jarvis AI',
    category: 'Voice AI',
    isFeatured: true,
    description: 'Voice assistant built with Python. Features speech recognition, wake-word activation, offline/online synthesis, desktop automation, and web searching.',
    longDescription: 'Jarvis AI is a standalone voice assistant created from the ground up in Python. It listens via microphone, extracts commands with natural speech processing, executes desktop operations, performs real-time web searches, and returns conversational spoken feedback using text-to-speech synthesis.',
    image: '/src/assets/images/jarvis_voice_assistant_1792082019913.jpg',
    tags: ['Python', 'Speech Recognition', 'pyttsx3', 'Audio Processing', 'Linux'],
    features: [
      'Wake-word detection with microphone sensitivity calibration',
      'Multi-engine speech recognition with offline fallback',
      'Dynamic voice synthesis responding in under 250ms',
      'System command execution (open apps, volume control, file lookup)',
      'Automated web search and summary extraction'
    ],
    codeSnippet: `import speech_recognition as sr
import pyttsx3
import datetime
import webbrowser
import subprocess

class JarvisAssistant:
    def __init__(self):
        self.engine = pyttsx3.init()
        self.recognizer = sr.Recognizer()
        
    def speak(self, text):
        self.engine.say(text)
        self.engine.runAndWait()
        
    def process_command(self, cmd):
        if "time" in cmd:
            now = datetime.datetime.now().strftime("%I:%M %p")
            self.speak(f"The current time is {now}")
        elif "search" in cmd:
            query = cmd.replace("search", "").strip()
            self.speak(f"Searching web for {query}")
            webbrowser.open(f"https://duckduckgo.com/?q={query}")
        elif "status" in cmd:
            self.speak("All systems operating normally on Linux environment.")`,
    githubUrl: 'https://github.com/tahir-iqbal-dev/jarvis-voice-assistant',
    liveDemoUrl: '#simulator'
  },
  {
    id: 'linux-task-orchestrator',
    title: 'Linux Task Orchestrator',
    category: 'Linux Tooling',
    isFeatured: false,
    description: 'Python & Bash CLI automation suite for scheduled server maintenance, log rotation, and automated tar backups.',
    longDescription: 'A lightweight systems automation utility designed for Linux servers. It monitors storage quotas, rotates verbose application logs, packages incremental backups, and pushes status notifications directly to the terminal.',
    image: '/src/assets/images/python_automation_code_1792082020616.jpg',
    tags: ['Python', 'Bash', 'Linux', 'Systemd', 'Automation'],
    features: [
      'Automated incremental file system backups with timestamping',
      'Log rotation with gzip compression and retention policies',
      'Storage threshold warning alerts before disk exhaustion',
      'Interactive command-line flags and dry-run execution mode'
    ],
    codeSnippet: `import os
import shutil
import tarfile
from datetime import datetime

def archive_directory(source_dir: str, output_dir: str):
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    archive_name = f"backup_{timestamp}.tar.gz"
    dest_path = os.path.join(output_dir, archive_name)
    
    with tarfile.open(dest_path, "w:gz") as tar:
        tar.add(source_dir, arcname=os.path.basename(source_dir))
    return dest_path`,
    githubUrl: 'https://github.com/tahir-iqbal-dev/linux-task-orchestrator'
  },
  {
    id: 'web-data-pipeline',
    title: 'Web Data Scraper & Pipeline',
    category: 'Web & Automation',
    isFeatured: false,
    description: 'High-speed Python web crawler with automated HTML extraction, data cleaning, and CSV/JSON output generation.',
    longDescription: 'A modular data extraction pipeline built in Python to collect structured product and research data from modern websites. Includes rate limiting, proxy handling, error retries, and automated CSV/JSON file generation.',
    image: '/src/assets/images/python_automation_code_1792082020616.jpg',
    tags: ['Python', 'BeautifulSoup', 'Requests', 'Data Pipeline', 'JSON'],
    features: [
      'Concurrent HTTP requests with respectful jitter delay',
      'Robust CSS selector extraction and data sanitization',
      'Deduplication and schema validation before file export',
      'Export support for clean tabular CSV and structured JSON'
    ],
    codeSnippet: `import requests
from bs4 import BeautifulSoup
import csv

def scrape_catalog(base_url: str):
    headers = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64)"}
    response = requests.get(base_url, headers=headers, timeout=10)
    soup = BeautifulSoup(response.text, "html.parser")
    
    items = []
    for card in soup.select(".product-card"):
        title = card.select_one(".title").get_text(strip=True)
        price = card.select_one(".price").get_text(strip=True)
        items.append({"title": title, "price": price})
    return items`,
    githubUrl: 'https://github.com/tahir-iqbal-dev/python-web-scraper'
  },
  {
    id: 'quickvoice-transcriber',
    title: 'QuickVoice Desktop Transcriber',
    category: 'Voice AI',
    isFeatured: false,
    description: 'Minimalist desktop voice note recorder that captures hotkey speech and stores transcribed text locally.',
    longDescription: 'A streamlined voice-to-text utility that triggers with a single keyboard hotkey. Records audio snippets in the background, processes speech through a local speech model, and copies the recognized text directly to the system clipboard.',
    image: '/src/assets/images/jarvis_voice_assistant_1792082019913.jpg',
    tags: ['Python', 'Speech Recognition', 'Clipboard', 'Desktop Tool'],
    features: [
      'Global keyboard listener for zero-delay voice capture',
      'Instant audio waveform feedback during active recording',
      'Automatic clipboard population with clean transcribed text',
      'Local history log saved in markdown format'
    ],
    codeSnippet: `import speech_recognition as sr
import subprocess

def capture_and_paste():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        audio = r.listen(source, phrase_time_limit=10)
    try:
        text = r.recognize_google(audio)
        subprocess.run(["xclip", "-selection", "clipboard"], input=text.encode())
        return text
    except sr.UnknownValueError:
        return None`,
    githubUrl: 'https://github.com/tahir-iqbal-dev/quickvoice-transcriber'
  },
  {
    id: 'linux-system-daemon',
    title: 'Linux Health Monitor Daemon',
    category: 'Linux Tooling',
    isFeatured: false,
    description: 'Background Linux daemon tracking CPU usage, RAM utilization, and disk I/O with automated terminal warnings.',
    longDescription: 'A lightweight Python monitoring daemon designed to run 24/7 on Ubuntu/Debian machines with low memory footprint. It continuously tracks CPU thermals, memory spikes, and disk partition capacity, dispatching notifications when parameters breach thresholds.',
    image: '/src/assets/images/python_automation_code_1792082020616.jpg',
    tags: ['Python', 'psutil', 'Linux Daemon', 'CLI', 'Monitoring'],
    features: [
      'Ultra-low CPU overhead (< 0.5% CPU utilization)',
      'Configurable thresholds for RAM, swap, and disk capacity',
      'System journal integration via syslog logging',
      'Automated email/desktop notification on breach events'
    ],
    codeSnippet: `import psutil
import time
import logging

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

def monitor_system(cpu_threshold=85, mem_threshold=90):
    cpu = psutil.cpu_percent(interval=1)
    mem = psutil.virtual_memory().percent
    disk = psutil.disk_usage("/").percent
    
    if cpu > cpu_threshold or mem > mem_threshold:
        logging.warning(f"HIGH LOAD! CPU: {cpu}% | RAM: {mem}% | Disk: {disk}%")
    else:
        logging.info(f"System Normal: CPU {cpu}% | RAM {mem}%")`,
    githubUrl: 'https://github.com/tahir-iqbal-dev/linux-system-monitor'
  }
];
