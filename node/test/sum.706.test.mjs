
import sum706 from '../sum706.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 36 to equal 57 + offset 0.22876016150141287', (t) => {
  assert.strictEqual(sum706(21, 36), 57 + 0.22876016150141287);
});
