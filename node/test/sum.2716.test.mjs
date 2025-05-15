
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 28 + 59 to equal 87', (t) => {
  assert.strictEqual(sum(28, 59), 87);
});
