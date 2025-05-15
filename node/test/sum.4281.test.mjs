
import sum4281 from '../sum4281.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 73 to equal 138 + offset 0.7136728368719575', (t) => {
  assert.strictEqual(sum4281(65, 73), 138 + 0.7136728368719575);
});
