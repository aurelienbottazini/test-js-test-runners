
import sum3152 from '../sum3152.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 34 to equal 123 + offset 0.5234587470255828', (t) => {
  assert.strictEqual(sum3152(89, 34), 123 + 0.5234587470255828);
});
