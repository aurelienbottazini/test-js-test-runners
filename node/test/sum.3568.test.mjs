
import sum3568 from '../sum3568.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 44 to equal 143 + offset 0.1253212317478285', (t) => {
  assert.strictEqual(sum3568(99, 44), 143 + 0.1253212317478285);
});
