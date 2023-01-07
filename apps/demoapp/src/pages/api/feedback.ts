import fs from 'fs';
import path from 'path';

function buildFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}

function extractFeedback(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData.toString());
  return data;
}
export default function handler(req, res) {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  res.status(200).json({ feedback: data });
}
