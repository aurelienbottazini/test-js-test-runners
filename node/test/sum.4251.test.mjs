
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 88 + 27 to equal 115', (t) => {
  assert.strictEqual(sum(88, 27), 115);
});
