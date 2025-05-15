
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 68 to equal 154', (t) => {
  assert.strictEqual(sum(86, 68), 154);
});
