
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 17 + 69 to equal 86', (t) => {
  assert.strictEqual(sum(17, 69), 86);
});
