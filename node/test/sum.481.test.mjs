
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 84 + 20 to equal 104', (t) => {
  assert.strictEqual(sum(84, 20), 104);
});
