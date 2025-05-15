
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 21 to equal 21', (t) => {
  assert.strictEqual(sum(0, 21), 21);
});
