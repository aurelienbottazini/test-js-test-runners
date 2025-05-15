
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 2 to equal 33', (t) => {
  assert.strictEqual(sum(31, 2), 33);
});
