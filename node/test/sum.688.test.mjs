
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 97 to equal 184', (t) => {
  assert.strictEqual(sum(87, 97), 184);
});
