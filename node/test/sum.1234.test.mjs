
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 83 to equal 167', (t) => {
  assert.strictEqual(sum(84, 83), 167);
});
