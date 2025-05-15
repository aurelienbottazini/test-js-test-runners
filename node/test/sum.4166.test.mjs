
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 67 + 33 to equal 100', (t) => {
  assert.strictEqual(sum(67, 33), 100);
});
