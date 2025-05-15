
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 79 to equal 166', (t) => {
  assert.strictEqual(sum(87, 79), 166);
});
