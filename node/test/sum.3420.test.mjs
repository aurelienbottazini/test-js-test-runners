
import sum3420 from '../sum3420.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 31 to equal 114 + offset 0.4689737548778763', (t) => {
  assert.strictEqual(sum3420(83, 31), 114 + 0.4689737548778763);
});
