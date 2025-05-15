
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 18 + 42 to equal 60', (t) => {
  assert.strictEqual(sum(18, 42), 60);
});
