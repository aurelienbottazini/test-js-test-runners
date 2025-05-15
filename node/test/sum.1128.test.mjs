
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 99 + 29 to equal 128', (t) => {
  assert.strictEqual(sum(99, 29), 128);
});
