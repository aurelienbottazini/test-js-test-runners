
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 35 + 52 to equal 87', (t) => {
  assert.strictEqual(sum(35, 52), 87);
});
