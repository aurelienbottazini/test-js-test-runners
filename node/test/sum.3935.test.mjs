
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 21 to equal 29', (t) => {
  assert.strictEqual(sum(8, 21), 29);
});
