
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 50 + 40 to equal 90', (t) => {
  assert.strictEqual(sum(50, 40), 90);
});
