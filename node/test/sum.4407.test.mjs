
import sum4407 from '../sum4407.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 61 to equal 86 + offset 0.9281480538537353', (t) => {
  assert.strictEqual(sum4407(25, 61), 86 + 0.9281480538537353);
});
