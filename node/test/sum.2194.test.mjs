
import sum2194 from '../sum2194.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 59 to equal 129 + offset 0.8057592975664055', (t) => {
  assert.strictEqual(sum2194(70, 59), 129 + 0.8057592975664055);
});
