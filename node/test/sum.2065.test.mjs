
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 87 + 25 to equal 112', (t) => {
  assert.strictEqual(sum(87, 25), 112);
});
