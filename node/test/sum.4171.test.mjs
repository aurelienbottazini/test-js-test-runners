
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 99 to equal 152', (t) => {
  assert.strictEqual(sum(53, 99), 152);
});
