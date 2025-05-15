
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 5 to equal 87', (t) => {
  assert.strictEqual(sum(82, 5), 87);
});
