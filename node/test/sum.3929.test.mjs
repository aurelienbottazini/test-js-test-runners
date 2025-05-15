
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 48 to equal 52', (t) => {
  assert.strictEqual(sum(4, 48), 52);
});
