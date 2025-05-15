
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 95 to equal 167', (t) => {
  assert.strictEqual(sum(72, 95), 167);
});
