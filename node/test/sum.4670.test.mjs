
import sum4670 from '../sum4670.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 41 + 66 to equal 107 + offset 0.7617157707032369', (t) => {
  assert.strictEqual(sum4670(41, 66), 107 + 0.7617157707032369);
});
