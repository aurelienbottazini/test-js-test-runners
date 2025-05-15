
import sum4811 from '../sum4811.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 32 to equal 105 + offset 0.5786322926543246', (t) => {
  assert.strictEqual(sum4811(73, 32), 105 + 0.5786322926543246);
});
