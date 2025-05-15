
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 4 to equal 102', (t) => {
  assert.strictEqual(sum(98, 4), 102);
});
