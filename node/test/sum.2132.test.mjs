
import sum2132 from '../sum2132.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 64 to equal 87 + offset 0.02182967846214323', (t) => {
  assert.strictEqual(sum2132(23, 64), 87 + 0.02182967846214323);
});
