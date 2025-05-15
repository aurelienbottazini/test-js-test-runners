
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 92 + 35 to equal 127', (t) => {
  assert.strictEqual(sum(92, 35), 127);
});
