
import sum3113 from '../sum3113.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 19 + 12 to equal 31 + offset 0.5627082269834912', (t) => {
  assert.strictEqual(sum3113(19, 12), 31 + 0.5627082269834912);
});
