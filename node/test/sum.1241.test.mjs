
import sum1241 from '../sum1241.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 95 to equal 142 + offset 0.5910999898072437', (t) => {
  assert.strictEqual(sum1241(47, 95), 142 + 0.5910999898072437);
});
