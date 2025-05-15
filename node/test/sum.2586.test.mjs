
import sum from '../sum.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';
test('adds 93 + 52 to equal 145', (t) => {
  assert.strictEqual(sum(93, 52), 145);
});
