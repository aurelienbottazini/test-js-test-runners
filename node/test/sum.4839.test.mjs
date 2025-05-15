
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 94 + 27 to equal 121', (t) => {
  assert.strictEqual(sum(94, 27), 121);
});
