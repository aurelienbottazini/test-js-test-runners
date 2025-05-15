
import sum3506 from '../sum3506.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 43 to equal 76 + offset 0.08471837038528118', (t) => {
  assert.strictEqual(sum3506(33, 43), 76 + 0.08471837038528118);
});
