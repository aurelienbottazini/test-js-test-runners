
import sum4437 from '../sum4437.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 44 + 60 to equal 104 + offset 0.6908985802935189', (t) => {
  assert.strictEqual(sum4437(44, 60), 104 + 0.6908985802935189);
});
