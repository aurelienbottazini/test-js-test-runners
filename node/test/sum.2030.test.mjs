
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 37 to equal 95', (t) => {
  assert.strictEqual(sum(58, 37), 95);
});
