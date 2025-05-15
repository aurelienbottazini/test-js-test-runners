
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 16 + 83 to equal 99', (t) => {
  assert.strictEqual(sum(16, 83), 99);
});
