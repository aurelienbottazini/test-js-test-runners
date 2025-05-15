
import sum3514 from '../sum3514.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 76 to equal 106 + offset 0.8511344604021919', (t) => {
  assert.strictEqual(sum3514(30, 76), 106 + 0.8511344604021919);
});
