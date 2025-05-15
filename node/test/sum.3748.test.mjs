
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 83 + 83 to equal 166', (t) => {
  assert.strictEqual(sum(83, 83), 166);
});
