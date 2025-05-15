
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 54 + 46 to equal 100', (t) => {
  assert.strictEqual(sum(54, 46), 100);
});
