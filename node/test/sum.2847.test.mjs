
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 0 to equal 53', (t) => {
  assert.strictEqual(sum(53, 0), 53);
});
