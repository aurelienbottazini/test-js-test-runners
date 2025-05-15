
import sum2369 from '../sum2369.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 78 to equal 162 + offset 0.7152434173179695', (t) => {
  assert.strictEqual(sum2369(84, 78), 162 + 0.7152434173179695);
});
