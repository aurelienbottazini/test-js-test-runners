
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 20 + 30 to equal 50', (t) => {
  assert.strictEqual(sum(20, 30), 50);
});
