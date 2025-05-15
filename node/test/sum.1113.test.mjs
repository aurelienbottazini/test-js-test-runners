
import sum1113 from '../sum1113.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 99 to equal 140 + offset 0.17181143098867202', (t) => {
  assert.strictEqual(sum1113(41, 99), 140 + 0.17181143098867202);
});
