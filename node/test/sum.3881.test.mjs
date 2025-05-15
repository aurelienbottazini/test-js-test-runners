
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 79 + 33 to equal 112', (t) => {
  assert.strictEqual(sum(79, 33), 112);
});
