
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 53 to equal 53', (t) => {
  assert.strictEqual(sum(0, 53), 53);
});
