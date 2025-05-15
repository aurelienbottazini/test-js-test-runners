
import sum2373 from '../sum2373.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 82 to equal 170 + offset 0.06751920204969819', (t) => {
  assert.strictEqual(sum2373(88, 82), 170 + 0.06751920204969819);
});
