
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 77 to equal 152', (t) => {
  assert.strictEqual(sum(75, 77), 152);
});
