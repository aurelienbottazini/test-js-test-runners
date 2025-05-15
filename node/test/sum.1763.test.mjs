
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 55 to equal 84', (t) => {
  assert.strictEqual(sum(29, 55), 84);
});
