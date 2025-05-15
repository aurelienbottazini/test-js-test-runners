
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 6 + 60 to equal 66', (t) => {
  assert.strictEqual(sum(6, 60), 66);
});
