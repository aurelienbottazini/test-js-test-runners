
import sum1989 from '../sum1989.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 52 to equal 95 + offset 0.8383824634393143', (t) => {
  assert.strictEqual(sum1989(43, 52), 95 + 0.8383824634393143);
});
