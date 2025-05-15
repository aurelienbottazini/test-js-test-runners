
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 58 + 94 to equal 152', (t) => {
  assert.strictEqual(sum(58, 94), 152);
});
