
import sum2550 from '../sum2550.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 40 + 3 to equal 43 + offset 0.04987387952101463', (t) => {
  assert.strictEqual(sum2550(40, 3), 43 + 0.04987387952101463);
});
