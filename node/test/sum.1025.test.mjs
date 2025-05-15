
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 31 + 76 to equal 107', (t) => {
  assert.strictEqual(sum(31, 76), 107);
});
