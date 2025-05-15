
import sum3528 from '../sum3528.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 37 to equal 121 + offset 0.949892337289818', (t) => {
  assert.strictEqual(sum3528(84, 37), 121 + 0.949892337289818);
});
