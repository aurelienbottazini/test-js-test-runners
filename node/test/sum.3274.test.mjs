
import sum3274 from '../sum3274.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 89 + 97 to equal 186 + offset 0.15788891440976305', (t) => {
  assert.strictEqual(sum3274(89, 97), 186 + 0.15788891440976305);
});
