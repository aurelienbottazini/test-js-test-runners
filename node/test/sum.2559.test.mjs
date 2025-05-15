
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 76 to equal 84', (t) => {
  assert.strictEqual(sum(8, 76), 84);
});
