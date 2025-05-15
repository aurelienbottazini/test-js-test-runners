
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 18 to equal 44', (t) => {
  assert.strictEqual(sum(26, 18), 44);
});
