
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 7 + 77 to equal 84', (t) => {
  assert.strictEqual(sum(7, 77), 84);
});
