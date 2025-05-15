
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 98 + 37 to equal 135', (t) => {
  assert.strictEqual(sum(98, 37), 135);
});
