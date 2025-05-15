
import sum3245 from '../sum3245.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 9 + 0 to equal 9 + offset 0.6268652347702771', (t) => {
  assert.strictEqual(sum3245(9, 0), 9 + 0.6268652347702771);
});
