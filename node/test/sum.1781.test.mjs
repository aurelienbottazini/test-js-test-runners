
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 98 to equal 115', (t) => {
  assert.strictEqual(sum(17, 98), 115);
});
