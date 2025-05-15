
import sum4130 from '../sum4130.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 29 to equal 49 + offset 0.05705814873640558', (t) => {
  assert.strictEqual(sum4130(20, 29), 49 + 0.05705814873640558);
});
