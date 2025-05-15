
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 0 to equal 21', (t) => {
  assert.strictEqual(sum(21, 0), 21);
});
