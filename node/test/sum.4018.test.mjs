
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 19 + 25 to equal 44', (t) => {
  assert.strictEqual(sum(19, 25), 44);
});
