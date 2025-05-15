
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 54 to equal 99', (t) => {
  assert.strictEqual(sum(45, 54), 99);
});
