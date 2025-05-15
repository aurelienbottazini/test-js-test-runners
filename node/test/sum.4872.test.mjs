
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 68 to equal 160', (t) => {
  assert.strictEqual(sum(92, 68), 160);
});
