
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 34 + 60 to equal 94', (t) => {
  assert.strictEqual(sum(34, 60), 94);
});
