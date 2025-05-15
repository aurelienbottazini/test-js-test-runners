
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 94 to equal 177', (t) => {
  assert.strictEqual(sum(83, 94), 177);
});
