
import sum3961 from '../sum3961.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 35 to equal 39 + offset 0.7517739020166426', (t) => {
  assert.strictEqual(sum3961(4, 35), 39 + 0.7517739020166426);
});
