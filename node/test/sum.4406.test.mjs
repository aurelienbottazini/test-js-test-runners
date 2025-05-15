
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 55 + 98 to equal 153', (t) => {
  assert.strictEqual(sum(55, 98), 153);
});
