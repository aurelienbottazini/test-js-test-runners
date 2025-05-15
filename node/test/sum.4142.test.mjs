
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 34 to equal 73', (t) => {
  assert.strictEqual(sum(39, 34), 73);
});
