
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 33 to equal 52', (t) => {
  assert.strictEqual(sum(19, 33), 52);
});
