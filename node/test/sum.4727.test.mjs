
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 30 + 19 to equal 49', (t) => {
  assert.strictEqual(sum(30, 19), 49);
});
