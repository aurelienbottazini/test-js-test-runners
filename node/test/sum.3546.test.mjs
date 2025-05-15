
import sum3546 from '../sum3546.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 65 to equal 151 + offset 0.6919092710697878', (t) => {
  assert.strictEqual(sum3546(86, 65), 151 + 0.6919092710697878);
});
