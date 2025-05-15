
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 49 + 69 to equal 118', (t) => {
  assert.strictEqual(sum(49, 69), 118);
});
