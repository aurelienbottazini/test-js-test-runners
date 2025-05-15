
import sum4744 from '../sum4744.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 19 to equal 28 + offset 0.3406062710617007', (t) => {
  assert.strictEqual(sum4744(9, 19), 28 + 0.3406062710617007);
});
