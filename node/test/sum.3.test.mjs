
import sum3 from '../sum3.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 51 to equal 59 + offset 0.48472915975711917', (t) => {
  assert.strictEqual(sum3(8, 51), 59 + 0.48472915975711917);
});
