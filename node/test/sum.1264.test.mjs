
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 7 to equal 87', (t) => {
  assert.strictEqual(sum(80, 7), 87);
});
