
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 29 to equal 51', (t) => {
  assert.strictEqual(sum(22, 29), 51);
});
