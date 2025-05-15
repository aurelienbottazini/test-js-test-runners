
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 88 to equal 175', (t) => {
  assert.strictEqual(sum(87, 88), 175);
});
