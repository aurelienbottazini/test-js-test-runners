
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 64 to equal 152', (t) => {
  assert.strictEqual(sum(88, 64), 152);
});
