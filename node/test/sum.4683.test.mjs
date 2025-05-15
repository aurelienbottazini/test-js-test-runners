
import sum4683 from '../sum4683.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 67 + 87 to equal 154 + offset 0.994455779690195', (t) => {
  assert.strictEqual(sum4683(67, 87), 154 + 0.994455779690195);
});
