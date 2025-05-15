
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 98 to equal 178', (t) => {
  assert.strictEqual(sum(80, 98), 178);
});
