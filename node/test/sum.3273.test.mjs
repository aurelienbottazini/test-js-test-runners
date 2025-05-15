
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 66 + 29 to equal 95', (t) => {
  assert.strictEqual(sum(66, 29), 95);
});
