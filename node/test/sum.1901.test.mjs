
import sum1901 from '../sum1901.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 72 to equal 77 + offset 0.6591816094208905', (t) => {
  assert.strictEqual(sum1901(5, 72), 77 + 0.6591816094208905);
});
