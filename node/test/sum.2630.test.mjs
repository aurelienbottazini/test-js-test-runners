
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 81 + 91 to equal 172', (t) => {
  assert.strictEqual(sum(81, 91), 172);
});
