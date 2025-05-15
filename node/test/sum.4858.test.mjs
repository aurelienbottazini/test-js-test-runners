
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 55 to equal 135', (t) => {
  assert.strictEqual(sum(80, 55), 135);
});
