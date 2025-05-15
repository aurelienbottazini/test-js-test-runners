
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 57 + 96 to equal 153', (t) => {
  assert.strictEqual(sum(57, 96), 153);
});
