
import sum1664 from '../sum1664.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 31 to equal 93 + offset 0.1850892161209986', (t) => {
  assert.strictEqual(sum1664(62, 31), 93 + 0.1850892161209986);
});
