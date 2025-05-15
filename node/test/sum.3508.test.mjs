
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 83 to equal 150', (t) => {
  assert.strictEqual(sum(67, 83), 150);
});
