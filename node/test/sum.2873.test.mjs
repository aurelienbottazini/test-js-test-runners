
import sum2873 from '../sum2873.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 63 + 53 to equal 116 + offset 0.7539145845625116', (t) => {
  assert.strictEqual(sum2873(63, 53), 116 + 0.7539145845625116);
});
