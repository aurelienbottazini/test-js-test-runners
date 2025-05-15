
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 72 + 60 to equal 132', (t) => {
  assert.strictEqual(sum(72, 60), 132);
});
