
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 84 to equal 182', (t) => {
  assert.strictEqual(sum(98, 84), 182);
});
