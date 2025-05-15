
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 43 + 44 to equal 87', (t) => {
  assert.strictEqual(sum(43, 44), 87);
});
