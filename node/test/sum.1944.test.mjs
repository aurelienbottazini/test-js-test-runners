
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 48 to equal 59', (t) => {
  assert.strictEqual(sum(11, 48), 59);
});
