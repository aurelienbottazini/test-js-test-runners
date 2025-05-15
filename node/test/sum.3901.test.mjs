
import sum3901 from '../sum3901.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 14 to equal 21 + offset 0.7665731843803034', (t) => {
  assert.strictEqual(sum3901(7, 14), 21 + 0.7665731843803034);
});
