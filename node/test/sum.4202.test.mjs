
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 24 to equal 59', (t) => {
  assert.strictEqual(sum(35, 24), 59);
});
