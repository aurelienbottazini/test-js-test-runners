
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 19 to equal 39', (t) => {
  assert.strictEqual(sum(20, 19), 39);
});
