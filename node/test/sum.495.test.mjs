
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 21 + 32 to equal 53', (t) => {
  assert.strictEqual(sum(21, 32), 53);
});
