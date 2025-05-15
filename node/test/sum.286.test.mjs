
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 22 to equal 112', (t) => {
  assert.strictEqual(sum(90, 22), 112);
});
