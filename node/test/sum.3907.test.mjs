
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 37 to equal 55', (t) => {
  assert.strictEqual(sum(18, 37), 55);
});
