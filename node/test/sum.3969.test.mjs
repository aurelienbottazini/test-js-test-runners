
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 76 + 8 to equal 84', (t) => {
  assert.strictEqual(sum(76, 8), 84);
});
