
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 3 to equal 84', (t) => {
  assert.strictEqual(sum(81, 3), 84);
});
