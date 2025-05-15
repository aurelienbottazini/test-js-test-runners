
import sum4257 from '../sum4257.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 70 to equal 126 + offset 0.14193560154590057', (t) => {
  assert.strictEqual(sum4257(56, 70), 126 + 0.14193560154590057);
});
