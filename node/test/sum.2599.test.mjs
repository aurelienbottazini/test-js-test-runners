
import sum2599 from '../sum2599.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 84 to equal 167 + offset 0.6111320935751055', (t) => {
  assert.strictEqual(sum2599(83, 84), 167 + 0.6111320935751055);
});
