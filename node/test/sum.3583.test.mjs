
import sum3583 from '../sum3583.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 55 to equal 128 + offset 0.8087910383693688', (t) => {
  assert.strictEqual(sum3583(73, 55), 128 + 0.8087910383693688);
});
