
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 30 to equal 84', (t) => {
  assert.strictEqual(sum(54, 30), 84);
});
