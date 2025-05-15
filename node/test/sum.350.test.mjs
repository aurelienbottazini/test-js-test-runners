
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 63 + 91 to equal 154', (t) => {
  assert.strictEqual(sum(63, 91), 154);
});
