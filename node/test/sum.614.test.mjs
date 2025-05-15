
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 33 + 79 to equal 112', (t) => {
  assert.strictEqual(sum(33, 79), 112);
});
