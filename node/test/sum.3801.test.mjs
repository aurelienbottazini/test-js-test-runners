
import sum3801 from '../sum3801.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 39 to equal 87 + offset 0.5175784365591194', (t) => {
  assert.strictEqual(sum3801(48, 39), 87 + 0.5175784365591194);
});
