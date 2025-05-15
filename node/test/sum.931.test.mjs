
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 47 + 40 to equal 87', (t) => {
  assert.strictEqual(sum(47, 40), 87);
});
