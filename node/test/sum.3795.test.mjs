
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 6 to equal 66', (t) => {
  assert.strictEqual(sum(60, 6), 66);
});
