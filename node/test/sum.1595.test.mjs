
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 2 + 83 to equal 85', (t) => {
  assert.strictEqual(sum(2, 83), 85);
});
