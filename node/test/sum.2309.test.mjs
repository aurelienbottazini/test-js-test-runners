
import sum2309 from '../sum2309.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 26 to equal 47 + offset 0.22990612170843217', (t) => {
  assert.strictEqual(sum2309(21, 26), 47 + 0.22990612170843217);
});
