
import sum3260 from '../sum3260.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 69 to equal 96 + offset 0.015131231060577788', (t) => {
  assert.strictEqual(sum3260(27, 69), 96 + 0.015131231060577788);
});
