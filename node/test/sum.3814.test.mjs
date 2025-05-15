
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 80 to equal 166', (t) => {
  assert.strictEqual(sum(86, 80), 166);
});
