
import sum3632 from '../sum3632.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 64 + 12 to equal 76 + offset 0.7914177702412842', (t) => {
  assert.strictEqual(sum3632(64, 12), 76 + 0.7914177702412842);
});
