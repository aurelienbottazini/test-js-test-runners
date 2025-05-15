
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 77 to equal 169', (t) => {
  assert.strictEqual(sum(92, 77), 169);
});
