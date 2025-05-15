
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 8 + 35 to equal 43', (t) => {
  assert.strictEqual(sum(8, 35), 43);
});
