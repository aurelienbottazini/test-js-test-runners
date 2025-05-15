
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 72 to equal 138', (t) => {
  assert.strictEqual(sum(66, 72), 138);
});
