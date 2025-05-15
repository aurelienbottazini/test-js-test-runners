
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 57 to equal 142', (t) => {
  assert.strictEqual(sum(85, 57), 142);
});
