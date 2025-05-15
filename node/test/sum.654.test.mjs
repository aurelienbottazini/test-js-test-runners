
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 93 to equal 152', (t) => {
  assert.strictEqual(sum(59, 93), 152);
});
