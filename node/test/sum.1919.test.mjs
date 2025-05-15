
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 70 + 14 to equal 84', (t) => {
  assert.strictEqual(sum(70, 14), 84);
});
