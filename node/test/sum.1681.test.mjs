
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 12 to equal 95', (t) => {
  assert.strictEqual(sum(83, 12), 95);
});
