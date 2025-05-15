
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 34 to equal 92', (t) => {
  assert.strictEqual(sum(58, 34), 92);
});
