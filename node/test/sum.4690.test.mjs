
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 96 to equal 178', (t) => {
  assert.strictEqual(sum(82, 96), 178);
});
