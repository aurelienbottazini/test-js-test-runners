
import sum2598 from '../sum2598.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 93 to equal 126 + offset 0.22641070067752878', (t) => {
  assert.strictEqual(sum2598(33, 93), 126 + 0.22641070067752878);
});
