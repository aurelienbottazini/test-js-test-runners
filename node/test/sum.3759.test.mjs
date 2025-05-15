
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 26 + 27 to equal 53', (t) => {
  assert.strictEqual(sum(26, 27), 53);
});
