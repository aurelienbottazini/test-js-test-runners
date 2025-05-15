
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 75 to equal 169', (t) => {
  assert.strictEqual(sum(94, 75), 169);
});
