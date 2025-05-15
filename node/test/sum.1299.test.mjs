
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 48 to equal 58', (t) => {
  assert.strictEqual(sum(10, 48), 58);
});
