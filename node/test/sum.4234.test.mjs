
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 40 to equal 47', (t) => {
  assert.strictEqual(sum(7, 40), 47);
});
