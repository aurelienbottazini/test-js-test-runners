
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 9 to equal 84', (t) => {
  assert.strictEqual(sum(75, 9), 84);
});
