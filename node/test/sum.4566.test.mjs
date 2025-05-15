
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 76 to equal 105', (t) => {
  assert.strictEqual(sum(29, 76), 105);
});
