
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 68 + 84 to equal 152', (t) => {
  assert.strictEqual(sum(68, 84), 152);
});
