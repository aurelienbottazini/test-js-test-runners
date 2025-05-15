
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 63 to equal 92', (t) => {
  assert.strictEqual(sum(29, 63), 92);
});
