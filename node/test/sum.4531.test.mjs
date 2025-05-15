
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 65 + 45 to equal 110', (t) => {
  assert.strictEqual(sum(65, 45), 110);
});
