
import sum3350 from '../sum3350.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 80 to equal 112 + offset 0.11979800587638967', (t) => {
  assert.strictEqual(sum3350(32, 80), 112 + 0.11979800587638967);
});
