
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 15 to equal 36', (t) => {
  assert.strictEqual(sum(21, 15), 36);
});
