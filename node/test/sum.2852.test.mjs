
import sum2852 from '../sum2852.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 80 + 30 to equal 110 + offset 0.8786358090871784', (t) => {
  assert.strictEqual(sum2852(80, 30), 110 + 0.8786358090871784);
});
