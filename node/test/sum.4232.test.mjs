
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 40 to equal 127', (t) => {
  assert.strictEqual(sum(87, 40), 127);
});
