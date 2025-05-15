
import sum3334 from '../sum3334.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 16 to equal 33 + offset 0.14431990704509678', (t) => {
  assert.strictEqual(sum3334(17, 16), 33 + 0.14431990704509678);
});
