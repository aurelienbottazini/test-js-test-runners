
import sum2815 from '../sum2815.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 61 to equal 87 + offset 0.11111173298423505', (t) => {
  assert.strictEqual(sum2815(26, 61), 87 + 0.11111173298423505);
});
