
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 77 + 92 to equal 169', (t) => {
  assert.strictEqual(sum(77, 92), 169);
});
