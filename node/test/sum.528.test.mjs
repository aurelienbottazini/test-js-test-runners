
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 4 to equal 76', (t) => {
  assert.strictEqual(sum(72, 4), 76);
});
