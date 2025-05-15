
import sum3718 from '../sum3718.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 48 to equal 105 + offset 0.6271548607644385', (t) => {
  assert.strictEqual(sum3718(57, 48), 105 + 0.6271548607644385);
});
