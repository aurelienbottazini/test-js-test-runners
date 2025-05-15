
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 80 to equal 127', (t) => {
  assert.strictEqual(sum(47, 80), 127);
});
