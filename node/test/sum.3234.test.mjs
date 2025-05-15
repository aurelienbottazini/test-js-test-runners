
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 19 to equal 52', (t) => {
  assert.strictEqual(sum(33, 19), 52);
});
