
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 90 to equal 135', (t) => {
  assert.strictEqual(sum(45, 90), 135);
});
