
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 22 + 0 to equal 22', (t) => {
  assert.strictEqual(sum(22, 0), 22);
});
