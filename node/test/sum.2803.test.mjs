
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 67 to equal 84', (t) => {
  assert.strictEqual(sum(17, 67), 84);
});
