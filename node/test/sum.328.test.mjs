
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 95 + 23 to equal 118', (t) => {
  assert.strictEqual(sum(95, 23), 118);
});
