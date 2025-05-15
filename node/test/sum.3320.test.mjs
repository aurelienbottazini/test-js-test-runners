
import sum3320 from '../sum3320.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 9 to equal 65 + offset 0.009995763819484638', (t) => {
  assert.strictEqual(sum3320(56, 9), 65 + 0.009995763819484638);
});
