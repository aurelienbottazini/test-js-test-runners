
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 91 to equal 152', (t) => {
  assert.strictEqual(sum(61, 91), 152);
});
