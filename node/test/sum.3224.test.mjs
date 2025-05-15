
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 73 + 96 to equal 169', (t) => {
  assert.strictEqual(sum(73, 96), 169);
});
