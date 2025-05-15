
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 98 to equal 171', (t) => {
  assert.strictEqual(sum(73, 98), 171);
});
