
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 60 to equal 85', (t) => {
  assert.strictEqual(sum(25, 60), 85);
});
