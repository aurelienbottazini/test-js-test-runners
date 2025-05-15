
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 60 to equal 107', (t) => {
  assert.strictEqual(sum(47, 60), 107);
});
