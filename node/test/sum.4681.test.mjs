
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 5 to equal 22', (t) => {
  assert.strictEqual(sum(17, 5), 22);
});
