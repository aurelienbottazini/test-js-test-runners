
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 25 + 35 to equal 60', (t) => {
  assert.strictEqual(sum(25, 35), 60);
});
