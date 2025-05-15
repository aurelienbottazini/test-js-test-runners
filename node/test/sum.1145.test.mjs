
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 52 to equal 55', (t) => {
  assert.strictEqual(sum(3, 52), 55);
});
