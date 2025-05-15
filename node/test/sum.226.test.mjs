
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 86 + 49 to equal 135', (t) => {
  assert.strictEqual(sum(86, 49), 135);
});
