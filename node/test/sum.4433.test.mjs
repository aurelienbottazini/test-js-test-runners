
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 10 + 27 to equal 37', (t) => {
  assert.strictEqual(sum(10, 27), 37);
});
