
import sum3678 from '../sum3678.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 2 to equal 8 + offset 0.9487365354953623', (t) => {
  assert.strictEqual(sum3678(6, 2), 8 + 0.9487365354953623);
});
