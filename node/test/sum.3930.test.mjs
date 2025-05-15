
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 11 to equal 83', (t) => {
  assert.strictEqual(sum(72, 11), 83);
});
