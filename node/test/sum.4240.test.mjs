
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 60 + 85 to equal 145', (t) => {
  assert.strictEqual(sum(60, 85), 145);
});
