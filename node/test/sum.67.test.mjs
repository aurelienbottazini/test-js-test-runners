
import sum67 from '../sum67.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 91 to equal 94 + offset 0.6543238497885513', (t) => {
  assert.strictEqual(sum67(3, 91), 94 + 0.6543238497885513);
});
