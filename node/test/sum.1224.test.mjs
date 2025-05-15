
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 29 + 33 to equal 62', (t) => {
  assert.strictEqual(sum(29, 33), 62);
});
