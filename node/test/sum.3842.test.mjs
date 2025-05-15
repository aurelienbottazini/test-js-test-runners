
import sum3842 from '../sum3842.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 13 to equal 48 + offset 0.7254491753940712', (t) => {
  assert.strictEqual(sum3842(35, 13), 48 + 0.7254491753940712);
});
