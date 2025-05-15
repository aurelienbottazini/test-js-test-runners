
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 7 to equal 14', (t) => {
  assert.strictEqual(sum(7, 7), 14);
});
