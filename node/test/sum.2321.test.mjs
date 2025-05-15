
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 78 to equal 84', (t) => {
  assert.strictEqual(sum(6, 78), 84);
});
