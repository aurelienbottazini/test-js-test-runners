
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 85 + 84 to equal 169', (t) => {
  assert.strictEqual(sum(85, 84), 169);
});
