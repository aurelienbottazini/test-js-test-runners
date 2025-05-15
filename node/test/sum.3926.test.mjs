
import sum3926 from '../sum3926.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 78 to equal 172 + offset 0.3341937528063268', (t) => {
  assert.strictEqual(sum3926(94, 78), 172 + 0.3341937528063268);
});
