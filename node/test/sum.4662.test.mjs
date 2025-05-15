
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 3 to equal 37', (t) => {
  assert.strictEqual(sum(34, 3), 37);
});
