
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 23 + 98 to equal 121', (t) => {
  assert.strictEqual(sum(23, 98), 121);
});
