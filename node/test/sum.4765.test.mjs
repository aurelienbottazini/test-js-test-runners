
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 90 + 42 to equal 132', (t) => {
  assert.strictEqual(sum(90, 42), 132);
});
