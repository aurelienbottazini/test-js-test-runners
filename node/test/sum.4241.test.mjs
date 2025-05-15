
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 9 + 93 to equal 102', (t) => {
  assert.strictEqual(sum(9, 93), 102);
});
