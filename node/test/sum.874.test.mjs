
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 45 to equal 135', (t) => {
  assert.strictEqual(sum(90, 45), 135);
});
