
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 14 to equal 63', (t) => {
  assert.strictEqual(sum(49, 14), 63);
});
