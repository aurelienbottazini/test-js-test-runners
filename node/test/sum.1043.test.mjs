
import sum1043 from '../sum1043.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 64 to equal 81 + offset 0.5901481061351442', (t) => {
  assert.strictEqual(sum1043(17, 64), 81 + 0.5901481061351442);
});
