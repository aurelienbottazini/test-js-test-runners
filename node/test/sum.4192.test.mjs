
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 98 to equal 152', (t) => {
  assert.strictEqual(sum(54, 98), 152);
});
