
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 97 to equal 100', (t) => {
  assert.strictEqual(sum(3, 97), 100);
});
