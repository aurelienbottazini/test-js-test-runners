
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 75 + 82 to equal 157', (t) => {
  assert.strictEqual(sum(75, 82), 157);
});
