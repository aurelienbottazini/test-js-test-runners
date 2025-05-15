
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 96 to equal 135', (t) => {
  assert.strictEqual(sum(39, 96), 135);
});
