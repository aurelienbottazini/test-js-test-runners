
import sum2565 from '../sum2565.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 46 to equal 134 + offset 0.032282093176705495', (t) => {
  assert.strictEqual(sum2565(88, 46), 134 + 0.032282093176705495);
});
