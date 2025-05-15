
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 94 to equal 115', (t) => {
  assert.strictEqual(sum(21, 94), 115);
});
