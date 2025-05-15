
import sum3396 from '../sum3396.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 3 to equal 88 + offset 0.06264338003980607', (t) => {
  assert.strictEqual(sum3396(85, 3), 88 + 0.06264338003980607);
});
