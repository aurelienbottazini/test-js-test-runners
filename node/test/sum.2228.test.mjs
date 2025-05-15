
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 13 to equal 31', (t) => {
  assert.strictEqual(sum(18, 13), 31);
});
