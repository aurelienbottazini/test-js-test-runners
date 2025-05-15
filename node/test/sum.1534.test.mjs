
import sum1534 from '../sum1534.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 65 to equal 94 + offset 0.014728538006114178', (t) => {
  assert.strictEqual(sum1534(29, 65), 94 + 0.014728538006114178);
});
