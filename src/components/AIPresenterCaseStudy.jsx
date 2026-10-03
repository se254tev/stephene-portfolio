import './AIPresenterCaseStudy.css'

function AIPresenterCaseStudy() {
  return (
    <section id="ai-radio" className="section ai-radio-section">
      <div className="section-header">
        <p className="section-kicker">Final-Year Capstone Project</p>
        <h2>AI Radio Presenter — Technical Case Study</h2>
      </div>

      <div className="ai-layout">
        <div className="ai-summary">
          <h3>Overview</h3>
          <p>
            The repository <a href="https://github.com/se254tev/AI-radio-presenter" target="_blank" rel="noreferrer">AI-radio-presenter</a>
            describes a production-focused autonomous AI radio presenter capable of running multi-hour broadcasts with
            segment planning, natural language generation and text-to-speech synthesis. The content below documents only
            what the repository and its configuration files reveal; where details are missing they are marked with
            <strong> [ADD INFORMATION]</strong>.
          </p>

          <h4>Status</h4>
          <p>Active Development (repository indicates a working backend with AI and voice components)</p>

          <h4>Primary focus</h4>
          <p>AI • Media Technology • Software Development</p>

          <h4>Repository</h4>
          <p>
            <a href="https://github.com/se254tev/AI-radio-presenter" target="_blank" rel="noreferrer">github.com/se254tev/AI-radio-presenter</a>
          </p>
        </div>

        <div className="ai-details">
          <section>
            <h4>Verified architecture components</h4>
            <ul>
              <li>Backend API (FastAPI)</li>
              <li>AI pipeline: LLM generator and prompt builder (app/ai)</li>
              <li>Text-to-speech engine (app/voice/tts_engine.py)</li>
              <li>Speech-to-text engine (app/voice/stt_engine.py)</li>
              <li>Streaming and broadcast components (app/streaming)</li>
              <li>Scheduler (APScheduler present in requirements)</li>
              <li>Persistence layers: SQL (SQLAlchemy / asyncpg / Postgres) and optionally Mongo (motor/pymongo listed)</li>
              <li>Integration with external AI and TTS providers (openai, elevenlabs) as listed in requirements.txt</li>
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
            <p>The repository contains the following AI-related modules which implement the pipeline:</p>
            <ul>
              <li>app/ai/prompt_builder.py — constructs prompts and show-planning inputs for the LLM</li>
              <li>app/ai/llm_generator.py — orchestrates calls to language models to generate scripts and segments</li>
              <li>app/voice/tts_engine.py — handles text-to-speech using providers such as ElevenLabs (per requirements)</li>
              <li>app/voice/stt_engine.py — handles speech-to-text where needed</li>
            </ul>
            <p>
              This results in a pipeline such as: Show plan & inputs → Prompt builder → LLM generation → Presenter script →
              TTS → Audio processing → Streaming/output. Exact runtime orchestration is implemented in the repository's
              scheduler/streaming services (see app/scheduler and app/streaming folders).
            </p>
          </section>

          <section>
            <h4>Current implementation notes</h4>
            <ul>
              <li>Backend: FastAPI-based HTTP API (requirements and app structure)</li>
              <li>AI: OpenAI client and custom LLM orchestration code in app/ai</li>
              <li>Voice: ElevenLabs integration and a local TTS wrapper (app/voice/tts_engine.py)</li>
              <li>Storage: SQLAlchemy + asyncpg for Postgres; motor/pymongo dependencies suggest optional MongoDB usage</li>
              <li>Scheduling & automation: APScheduler listed for timed shows</li>
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
            <h4>Development progress (from repository)</h4>
            <ol>
              <li>Concept & design — show planning and AI-driven script generation (repo describes show-planner and LLM components)</li>
              <li>Prototype — LLM integration and TTS proof-of-concept (app/ai + app/voice modules present)</li>
              <li>Integration — scheduling, streaming, and persistence components added (app/scheduler, app/streaming, app/db)</li>
              <li>Current development — active work on reliability, automation, and production readiness (README notes)</li>
            </ol>
          </section>

          <section>
            <h4>How to explore the code</h4>
            <p>
              Review the repository files: <code>app/ai/</code>, <code>app/voice/</code>, <code>app/streaming/</code>, and
              the requirements.txt to understand the exact integrations. Where specifics matter (deployment, secrets,
              demo URL), the repository either documents them in README or leaves them for configuration.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

export default AIPresenterCaseStudy
