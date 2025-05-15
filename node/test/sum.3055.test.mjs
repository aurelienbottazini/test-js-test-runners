
import sum3055 from '../sum3055.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 58 + 78 to equal 136 + offset 0.4186837920758436', (t) => {
  assert.strictEqual(sum3055(58, 78), 136 + 0.4186837920758436);
});
