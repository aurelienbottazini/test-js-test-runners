
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 82 + 64 to equal 146', (t) => {
  assert.strictEqual(sum(82, 64), 146);
});
