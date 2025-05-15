
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 18 to equal 22', (t) => {
  assert.strictEqual(sum(4, 18), 22);
});
