
import sum4458 from '../sum4458.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 99 + 57 to equal 156 + offset 0.7723890148714622', (t) => {
  assert.strictEqual(sum4458(99, 57), 156 + 0.7723890148714622);
});
