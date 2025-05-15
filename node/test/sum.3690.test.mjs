
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 13 to equal 30', (t) => {
  assert.strictEqual(sum(17, 13), 30);
});
