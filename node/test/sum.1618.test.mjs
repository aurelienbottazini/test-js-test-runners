
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 64 to equal 154', (t) => {
  assert.strictEqual(sum(90, 64), 154);
});
