
import sum4053 from '../sum4053.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 32 to equal 41 + offset 0.11603264045824624', (t) => {
  assert.strictEqual(sum4053(9, 32), 41 + 0.11603264045824624);
});
