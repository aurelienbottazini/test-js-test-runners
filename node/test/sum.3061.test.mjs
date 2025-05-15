
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 12 + 72 to equal 84', (t) => {
  assert.strictEqual(sum(12, 72), 84);
});
