
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 27 to equal 111', (t) => {
  assert.strictEqual(sum(84, 27), 111);
});
