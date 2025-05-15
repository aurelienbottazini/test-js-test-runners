
import sum4956 from '../sum4956.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 40 to equal 120 + offset 0.29906963367762385', (t) => {
  assert.strictEqual(sum4956(80, 40), 120 + 0.29906963367762385);
});
