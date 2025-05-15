
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 71 + 98 to equal 169', (t) => {
  assert.strictEqual(sum(71, 98), 169);
});
