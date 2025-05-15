
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 45 + 97 to equal 142', (t) => {
  assert.strictEqual(sum(45, 97), 142);
});
