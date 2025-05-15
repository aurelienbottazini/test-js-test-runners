
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 64 + 90 to equal 154', (t) => {
  assert.strictEqual(sum(64, 90), 154);
});
