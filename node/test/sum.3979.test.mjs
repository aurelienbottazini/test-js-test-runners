
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 66 to equal 138', (t) => {
  assert.strictEqual(sum(72, 66), 138);
});
