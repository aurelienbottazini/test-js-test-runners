
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 58 to equal 152', (t) => {
  assert.strictEqual(sum(94, 58), 152);
});
