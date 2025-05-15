
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 52 + 69 to equal 121', (t) => {
  assert.strictEqual(sum(52, 69), 121);
});
