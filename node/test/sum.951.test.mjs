
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 10 to equal 53', (t) => {
  assert.strictEqual(sum(43, 10), 53);
});
