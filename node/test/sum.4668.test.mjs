
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 17 to equal 107', (t) => {
  assert.strictEqual(sum(90, 17), 107);
});
