
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 74 + 78 to equal 152', (t) => {
  assert.strictEqual(sum(74, 78), 152);
});
