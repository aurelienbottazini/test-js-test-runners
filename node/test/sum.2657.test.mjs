
import sum2657 from '../sum2657.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 36 to equal 88 + offset 0.867289784419611', (t) => {
  assert.strictEqual(sum2657(52, 36), 88 + 0.867289784419611);
});
