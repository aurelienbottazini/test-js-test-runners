
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 40 + 47 to equal 87', (t) => {
  assert.strictEqual(sum(40, 47), 87);
});
