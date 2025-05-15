
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 89 + 63 to equal 152', (t) => {
  assert.strictEqual(sum(89, 63), 152);
});
