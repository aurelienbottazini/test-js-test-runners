
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 49 to equal 92', (t) => {
  assert.strictEqual(sum(43, 49), 92);
});
