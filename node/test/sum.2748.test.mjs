
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 31 to equal 84', (t) => {
  assert.strictEqual(sum(53, 31), 84);
});
