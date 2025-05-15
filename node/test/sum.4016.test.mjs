
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 39 + 52 to equal 91', (t) => {
  assert.strictEqual(sum(39, 52), 91);
});
