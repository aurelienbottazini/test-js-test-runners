
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 15 + 17 to equal 32', (t) => {
  assert.strictEqual(sum(15, 17), 32);
});
