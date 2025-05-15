
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 76 to equal 86', (t) => {
  assert.strictEqual(sum(10, 76), 86);
});
