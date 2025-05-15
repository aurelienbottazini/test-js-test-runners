
import sum4759 from '../sum4759.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 40 to equal 113 + offset 0.12730347940506181', (t) => {
  assert.strictEqual(sum4759(73, 40), 113 + 0.12730347940506181);
});
