
import sum2924 from '../sum2924.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 98 to equal 99 + offset 0.4593637640292394', (t) => {
  assert.strictEqual(sum2924(1, 98), 99 + 0.4593637640292394);
});
