
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 37 to equal 45', (t) => {
  assert.strictEqual(sum(8, 37), 45);
});
