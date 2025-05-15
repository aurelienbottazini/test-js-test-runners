
import sum3736 from '../sum3736.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 72 + 71 to equal 143 + offset 0.9809139925995639', (t) => {
  assert.strictEqual(sum3736(72, 71), 143 + 0.9809139925995639);
});
