
import sum4923 from '../sum4923.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 56 to equal 122 + offset 0.6374129766490129', (t) => {
  assert.strictEqual(sum4923(66, 56), 122 + 0.6374129766490129);
});
