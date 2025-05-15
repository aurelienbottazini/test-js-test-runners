
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 1 to equal 29', (t) => {
  assert.strictEqual(sum(28, 1), 29);
});
