
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 34 to equal 115', (t) => {
  assert.strictEqual(sum(81, 34), 115);
});
