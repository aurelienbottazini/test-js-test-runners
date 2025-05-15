
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 45 to equal 128', (t) => {
  assert.strictEqual(sum(83, 45), 128);
});
