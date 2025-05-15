
import sum2801 from '../sum2801.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 3 to equal 90 + offset 0.013059357575832542', (t) => {
  assert.strictEqual(sum2801(87, 3), 90 + 0.013059357575832542);
});
