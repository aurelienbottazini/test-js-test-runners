
import sum3279 from '../sum3279.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 46 to equal 144 + offset 0.8496070296053805', (t) => {
  assert.strictEqual(sum3279(98, 46), 144 + 0.8496070296053805);
});
