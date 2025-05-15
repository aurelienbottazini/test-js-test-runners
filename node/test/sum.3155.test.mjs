
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 35 to equal 107', (t) => {
  assert.strictEqual(sum(72, 35), 107);
});
