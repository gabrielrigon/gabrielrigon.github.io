export const PROJECTS = [
  {
    name: 'AI adoption and governance across engineering teams',
    description:
      'Designed and ran the adoption program for teams on critical projects, from the guardrails that define safe use to the training curriculum and the model for managing day-to-day usage. I measured the gains, and they showed a clear return.',
    technologies: ['AI governance', 'Team enablement', 'Workflow design', 'Measurement'],
  },
  {
    name: 'Public health and education platforms at scale',
    description:
      'Technical direction of the whole portfolio serving municipal and state services, reaching more than 2 million people a month. I set the architecture, the standards and the delivery priorities across the teams building it.',
    technologies: ['Ruby on Rails', 'Node', 'React', 'Postgres', 'AWS'],
  },
  {
    name: 'Agent platform with a built-in evaluation layer',
    description:
      'Platform for corporate agents built on a single thesis: measurement is what makes cost optimization safe, because every saving, a smaller model, a cache, less context, is a bet that quality held. The agent loop runs end to end with streaming, tool calls and full tracing, durable runs on Temporal, and a deterministic provider that keeps it testable in CI without network.',
    technologies: ['Ruby on Rails', 'React', 'Temporal', 'AI APIs'],
    status: 'In progress',
  },
  {
    name: 'Natural-language analytics over the education data warehouse',
    description:
      "Reads the transactional database, materializes flat tables in Parquet and answers questions in plain Portuguese about them, using text-to-SQL rather than RAG, because the questions are analytical and embeddings over rows miss counts and filters. Business rules live in SQL, not in the model, so the answer is the same every day and can be justified to a school, and it's now becoming a multi-tenant product.",
    technologies: ['Python', 'DuckDB', 'Parquet', 'FastAPI', 'AI APIs'],
  },
  {
    name: 'Educacenso pre-validation engine',
    description:
      'Validates the school census file against the official INEP layout before submission, naming the exact field, the reason and the fix. The engine is deterministic, with rules extracted from the official spreadsheet into versioned caches, and AI only translates irregular rules into specs, once, without ever evaluating the file itself, which keeps every run reproducible and auditable.',
    technologies: ['Python', 'Flask', 'AI APIs'],
  },
]

export const EARLIER_WORK = [
  {
    name: 'Internal platform for AWS infrastructure',
    note: 'Infrastructure and applications provisioned through Terraform from a console instead of a shell, with encrypted credentials and an audit trail.',
    technologies: ['Go', 'React', 'Postgres', 'Terraform', 'AWS'],
  },
  {
    name: "Integration with Brazil's national health data network (RNDS)",
    note: 'The integration layer connecting public care systems to the national health data network, under its interoperability and compliance requirements.',
    technologies: ['Ruby on Rails', 'Node', 'Postgres'],
  },
  {
    name: 'School enrollment portal for a state education system',
    note: 'Includes the scoring engine that weighs questionnaire answers and geolocation to decide where each student is placed.',
    technologies: ['Ruby on Rails', 'Elasticsearch', 'Google Maps API'],
  },
  {
    name: 'Financial monitoring portal for a construction company',
    note: 'Architecture and roadmap across backend, frontend and infrastructure, including the SAP and Salesforce integrations.',
    technologies: ['.NET Core', 'React', 'Azure DevOps'],
  },
  {
    name: 'Applied AI school',
    note: 'A full learning product, catalog, checkout, student area and sales panel, with each lesson produced by an authoring pipeline, running end to end at effectively zero infrastructure cost.',
    technologies: ['React', 'Hono', 'Cloudflare Workers', 'D1', 'R2'],
  },
]
