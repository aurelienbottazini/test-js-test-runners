
import sum2317 from '../sum2317.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 97 to equal 108 + offset 0.17982528011153154', (t) => {
  assert.strictEqual(sum2317(11, 97), 108 + 0.17982528011153154);
});
