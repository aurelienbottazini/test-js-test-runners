
import sum3900 from '../sum3900.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 58 to equal 93 + offset 0.16523622163024387', (t) => {
  assert.strictEqual(sum3900(35, 58), 93 + 0.16523622163024387);
});
