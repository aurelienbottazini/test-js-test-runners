
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 58 to equal 128', (t) => {
  assert.strictEqual(sum(70, 58), 128);
});
