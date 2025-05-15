
import sum3240 from '../sum3240.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 14 to equal 81 + offset 0.9840438903654151', (t) => {
  assert.strictEqual(sum3240(67, 14), 81 + 0.9840438903654151);
});
