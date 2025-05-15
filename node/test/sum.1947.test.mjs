
import sum1947 from '../sum1947.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 58 to equal 114 + offset 0.15377391974970378', (t) => {
  assert.strictEqual(sum1947(56, 58), 114 + 0.15377391974970378);
});
