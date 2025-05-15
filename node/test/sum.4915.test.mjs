
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 59 + 76 to equal 135', (t) => {
  assert.strictEqual(sum(59, 76), 135);
});
