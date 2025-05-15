
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 16 to equal 100', (t) => {
  assert.strictEqual(sum(84, 16), 100);
});
