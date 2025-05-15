
import sum3109 from '../sum3109.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 63 to equal 148 + offset 0.049211198746674456', (t) => {
  assert.strictEqual(sum3109(85, 63), 148 + 0.049211198746674456);
});
