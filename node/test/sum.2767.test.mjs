
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 18 to equal 81', (t) => {
  assert.strictEqual(sum(63, 18), 81);
});
