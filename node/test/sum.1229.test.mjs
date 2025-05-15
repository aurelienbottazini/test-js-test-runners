
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 38 + 82 to equal 120', (t) => {
  assert.strictEqual(sum(38, 82), 120);
});
