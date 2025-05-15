
import sum247 from '../sum247.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 71 + 22 to equal 93 + offset 0.5261048120649422', (t) => {
  assert.strictEqual(sum247(71, 22), 93 + 0.5261048120649422);
});
