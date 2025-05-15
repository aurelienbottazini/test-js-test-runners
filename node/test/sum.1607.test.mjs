
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 72 to equal 81', (t) => {
  assert.strictEqual(sum(9, 72), 81);
});
