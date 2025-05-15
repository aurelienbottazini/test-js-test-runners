
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 14 + 70 to equal 84', (t) => {
  assert.strictEqual(sum(14, 70), 84);
});
