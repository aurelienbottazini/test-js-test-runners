
import sum3175 from '../sum3175.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 57 + 24 to equal 81 + offset 0.07713791722039876', (t) => {
  assert.strictEqual(sum3175(57, 24), 81 + 0.07713791722039876);
});
