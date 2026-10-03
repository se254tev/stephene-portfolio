import './AIPresenterCaseStudy.css'

function AIPresenterCaseStudy() {
  return (
    <section id="ai-radio" className="section ai-radio-section">
      <div className="section-header">
        <p className="section-kicker">Personal Project — Technical Case Study</p>
        <h2>AI Radio Presenter — Technical Case Study</h2>
      </div>

      <div className="ai-layout">
        <div className="ai-summary">
          <h3>Overview</h3>
          <p>
            The AI Radio Presenter is a personal AI engineering project focused on building a radio presentation system
            with components for broadcast planning, language-model script generation, text-to-speech, and streaming
            workflows. The <a href="https://github.com/se254tev/AI-radio-presenter" target="_blank" rel="noreferrer">AI-radio-presenter</a>
            repository contains a FastAPI backend and separate AI, voice, scheduler, and streaming modules. It is
            independently developed and remains in progress; the presence of these components does not by itself verify
            end-to-end broadcast operation. Where implementation or runtime details are not confirmed, they are marked
            with <strong> [ADD INFORMATION]</strong>.
          </p>

          <h4>Status</h4>
          <p>Active Development — personal AI engineering project</p>

          <h4>Primary focus</h4>
          <p>AI • Media Technology • Backend Engineering • Automation</p>

          <h4>Repository</h4>
          <p>
            <a href="https://github.com/se254tev/AI-radio-presenter" target="_blank" rel="noreferrer">github.com/se254tev/AI-radio-presenter</a>
          </p>
        </div>

        <div className="ai-details">
          <section>
            <h4>Repository architecture components</h4>
            <ul>
              <li>Backend API (FastAPI)</li>
              <li>AI pipeline: LLM generator and prompt builder (app/ai)</li>
              <li>Text-to-speech engine (app/voice/tts_engine.py)</li>
              <li>Speech-to-text engine (app/voice/stt_engine.py)</li>
              <li>Streaming and broadcast components (app/streaming)</li>
              <li>Scheduling dependency: APScheduler (listed in requirements.txt)</li>
              <li>Database dependencies: SQLAlchemy, asyncpg, psycopg, Motor, and PyMongo (actual database use/configuration: [ADD INFORMATION])</li>
              <li>External provider packages: OpenAI and ElevenLabs are listed in requirements.txt (active provider configuration: [ADD INFORMATION])</li>
            </ul>
          </section>

          <section>
            <h4>Technologies (from requirements.txt)</h4>
            <p>
              FastAPI, Uvicorn, Pydantic, aiohttp, httpx, OpenAI Python client, ElevenLabs, pydub, Redis (asyncio),
              SQLAlchemy, asyncpg, psycopg, Alembic, Motor/PyMongo, APScheduler, Prometheus client, python-dotenv.
            </p>
          </section>

          <section>
            <h4>AI pipeline (implemented components)</h4>
            <p>The repository contains these AI- and voice-related modules:</p>
            <ul>
              <li>app/ai/prompt_builder.py — prompt construction module</li>
              <li>app/ai/llm_generator.py — language-model generation module</li>
              <li>app/voice/tts_engine.py — text-to-speech module; configured provider: [ADD INFORMATION]</li>
              <li>app/voice/stt_engine.py — speech-to-text module</li>
            </ul>
            <p>
              A high-level flow suggested by these components is: show plan and inputs → prompt builder → LLM generation →
              presenter script → TTS → audio/streaming workflow. The exact runtime orchestration and which steps are
              currently connected end-to-end are [ADD INFORMATION].
            </p>
          </section>

          <section>
            <h4>Current implementation notes</h4>
            <ul>
              <li>Backend: FastAPI-based HTTP API (requirements and app structure)</li>
              <li>AI: OpenAI client and custom LLM orchestration code in app/ai</li>
              <li>Voice: TTS and STT modules are present in app/voice; configured speech providers: [ADD INFORMATION]</li>
              <li>Storage: SQL and MongoDB driver dependencies are listed; configured database and stored data: [ADD INFORMATION]</li>
              <li>Scheduling & automation: APScheduler is listed as a dependency; scheduled tasks currently running: [ADD INFORMATION]</li>
            </ul>
          </section>

          <section>
            <h4>Limitations & unknowns</h4>
            <ul>
              <li>Public live demo: [ADD INFORMATION]</li>
              <li>Deployment topology (how services are hosted/streamed) is not specified in repo files: [ADD INFORMATION]</li>
              <li>Exact cost/quotas and key management for external AI/TTS providers: [ADD INFORMATION]</li>
            </ul>
          </section>

          <section>
            <h4>Development progress — personal project</h4>
            <ol>
              <li>Concept & design — a show-planning and AI script-generation direction is reflected in the repository; project history: [ADD INFORMATION]</li>
              <li>Prototype — AI and voice modules are present; prototype milestones and verified behavior: [ADD INFORMATION]</li>
              <li>Integration — scheduler, streaming, and database-related components are present; connected workflows: [ADD INFORMATION]</li>
              <li>Current development — Active Development; current priorities and testing progress: [ADD INFORMATION]</li>
            </ol>
          </section>

          <section>
            <h4>How to explore the code</h4>
            <p>
              Review the repository files: <code>app/ai/</code>, <code>app/voice/</code>, <code>app/streaming/</code>, and
              <code> requirements.txt</code> to inspect the project components and declared dependencies. Where specifics
              matter (deployment, secrets, demo URL, and verified runtime behavior), see the project configuration or
              add confirmed details in place of <strong>[ADD INFORMATION]</strong>.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

export default AIPresenterCaseStudy
