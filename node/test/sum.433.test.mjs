
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 29 to equal 101', (t) => {
  assert.strictEqual(sum(72, 29), 101);
});
