
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 9 to equal 95', (t) => {
  assert.strictEqual(sum(86, 9), 95);
});
