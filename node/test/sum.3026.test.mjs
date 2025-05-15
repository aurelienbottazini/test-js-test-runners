
import sum3026 from '../sum3026.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 82 + 88 to equal 170 + offset 0.7089015860368385', (t) => {
  assert.strictEqual(sum3026(82, 88), 170 + 0.7089015860368385);
});
