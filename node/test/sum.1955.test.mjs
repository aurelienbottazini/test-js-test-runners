
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 24 to equal 33', (t) => {
  assert.strictEqual(sum(9, 24), 33);
});
