
import sum3256 from '../sum3256.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 97 to equal 180 + offset 0.06573954071295718', (t) => {
  assert.strictEqual(sum3256(83, 97), 180 + 0.06573954071295718);
});
