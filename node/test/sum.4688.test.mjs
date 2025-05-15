
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 53 + 53 to equal 106', (t) => {
  assert.strictEqual(sum(53, 53), 106);
});
