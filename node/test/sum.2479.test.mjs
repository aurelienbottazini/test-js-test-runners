
import sum2479 from '../sum2479.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 47 + 99 to equal 146 + offset 0.738125709679754', (t) => {
  assert.strictEqual(sum2479(47, 99), 146 + 0.738125709679754);
});
