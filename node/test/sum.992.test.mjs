
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 13 to equal 25', (t) => {
  assert.strictEqual(sum(12, 13), 25);
});
