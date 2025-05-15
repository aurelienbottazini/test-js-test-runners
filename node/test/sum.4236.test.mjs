
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 61 + 60 to equal 121', (t) => {
  assert.strictEqual(sum(61, 60), 121);
});
