
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 60 to equal 135', (t) => {
  assert.strictEqual(sum(75, 60), 135);
});
