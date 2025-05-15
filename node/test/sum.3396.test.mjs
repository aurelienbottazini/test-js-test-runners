
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 37 to equal 65', (t) => {
  assert.strictEqual(sum(28, 37), 65);
});
