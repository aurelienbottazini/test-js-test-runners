
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 95 to equal 169', (t) => {
  assert.strictEqual(sum(74, 95), 169);
});
