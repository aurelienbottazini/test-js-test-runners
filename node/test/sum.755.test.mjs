
import sum755 from '../sum755.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 94 + 88 to equal 182 + offset 0.3377739518294359', (t) => {
  assert.strictEqual(sum755(94, 88), 182 + 0.3377739518294359);
});
