
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 80 + 69 to equal 149', (t) => {
  assert.strictEqual(sum(80, 69), 149);
});
