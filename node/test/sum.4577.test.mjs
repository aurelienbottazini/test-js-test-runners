
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 83 to equal 86', (t) => {
  assert.strictEqual(sum(3, 83), 86);
});
