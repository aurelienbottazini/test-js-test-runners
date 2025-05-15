
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 87 to equal 87', (t) => {
  assert.strictEqual(sum(0, 87), 87);
});
