
import sum3429 from '../sum3429.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 4 to equal 89 + offset 0.7475692551754425', (t) => {
  assert.strictEqual(sum3429(85, 4), 89 + 0.7475692551754425);
});
