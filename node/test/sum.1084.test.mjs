
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 41 + 3 to equal 44', (t) => {
  assert.strictEqual(sum(41, 3), 44);
});
