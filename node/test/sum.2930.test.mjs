
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 96 to equal 161', (t) => {
  assert.strictEqual(sum(65, 96), 161);
});
