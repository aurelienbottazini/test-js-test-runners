
import sum2756 from '../sum2756.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 81 to equal 85 + offset 0.8523367646418019', (t) => {
  assert.strictEqual(sum2756(4, 81), 85 + 0.8523367646418019);
});
