
import sum4295 from '../sum4295.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 80 to equal 149 + offset 0.36331702878062033', (t) => {
  assert.strictEqual(sum4295(69, 80), 149 + 0.36331702878062033);
});
