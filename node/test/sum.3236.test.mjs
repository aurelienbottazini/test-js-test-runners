
import sum3236 from '../sum3236.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 63 to equal 114 + offset 0.3554909808122003', (t) => {
  assert.strictEqual(sum3236(51, 63), 114 + 0.3554909808122003);
});
