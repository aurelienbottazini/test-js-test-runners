
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 37 + 58 to equal 95', (t) => {
  assert.strictEqual(sum(37, 58), 95);
});
