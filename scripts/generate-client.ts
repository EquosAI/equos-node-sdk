import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const API_URL = 'http://localhost:3001/docs/v3-json';
const OUTPUT_DIR = resolve(__dirname, '../src/api');

function generateClient() {
  console.log('Generating API client...');

  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  try {
    // Ensure the API is running or fetch the JSON first if possible.
    // For simplicity, we assume the API is running locally.
    // Alternatively, we could start the API in background, fetch JSON, and kill it.

    // Using openapi-generator-cli to generate typescript-fetch client
    const command = `npx @openapitools/openapi-generator-cli generate \
      -i ${API_URL} \
      -g typescript-fetch \
      -o ${OUTPUT_DIR} \
      --additional-properties=typescriptThreePlus=true \
      --additional-properties=supportsES6=true`;

    execSync(command, { stdio: 'inherit' });
    console.log('Client generated successfully!');
  } catch (error) {
    console.error('Failed to generate client:', error);
    process.exit(1);
  }
}

generateClient();
