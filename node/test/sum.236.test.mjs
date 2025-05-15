
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 10 to equal 38', (t) => {
  assert.strictEqual(sum(28, 10), 38);
});
