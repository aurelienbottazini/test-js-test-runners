
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 69 + 15 to equal 84', (t) => {
  assert.strictEqual(sum(69, 15), 84);
});
