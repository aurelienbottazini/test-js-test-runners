
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 11 + 33 to equal 44', (t) => {
  assert.strictEqual(sum(11, 33), 44);
});
