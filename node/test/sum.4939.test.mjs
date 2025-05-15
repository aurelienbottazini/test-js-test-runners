
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 3 + 27 to equal 30', (t) => {
  assert.strictEqual(sum(3, 27), 30);
});
