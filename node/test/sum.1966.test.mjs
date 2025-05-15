
import sum1966 from '../sum1966.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 45 + 58 to equal 103 + offset 0.19965014743040033', (t) => {
  assert.strictEqual(sum1966(45, 58), 103 + 0.19965014743040033);
});
