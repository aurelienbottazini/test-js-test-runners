
import sum2848 from '../sum2848.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 21 to equal 84 + offset 0.9232102009433283', (t) => {
  assert.strictEqual(sum2848(63, 21), 84 + 0.9232102009433283);
});
