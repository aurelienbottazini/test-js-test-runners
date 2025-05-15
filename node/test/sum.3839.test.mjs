
import sum3839 from '../sum3839.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 25 to equal 57 + offset 0.20266081443055417', (t) => {
  assert.strictEqual(sum3839(32, 25), 57 + 0.20266081443055417);
});
