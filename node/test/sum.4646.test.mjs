
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 72 to equal 154', (t) => {
  assert.strictEqual(sum(82, 72), 154);
});
