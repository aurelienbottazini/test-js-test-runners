
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 0 + 14 to equal 14', (t) => {
  assert.strictEqual(sum(0, 14), 14);
});
