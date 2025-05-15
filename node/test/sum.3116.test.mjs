
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 72 to equal 131', (t) => {
  assert.strictEqual(sum(59, 72), 131);
});
