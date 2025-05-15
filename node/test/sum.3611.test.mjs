
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 53 to equal 120', (t) => {
  assert.strictEqual(sum(67, 53), 120);
});
