
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 4 + 73 to equal 77', (t) => {
  assert.strictEqual(sum(4, 73), 77);
});
