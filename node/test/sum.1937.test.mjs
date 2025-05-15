
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 67 to equal 128', (t) => {
  assert.strictEqual(sum(61, 67), 128);
});
