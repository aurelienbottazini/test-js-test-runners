
import sum61 from '../sum61.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 99 to equal 112 + offset 0.77718962446273', (t) => {
  assert.strictEqual(sum61(13, 99), 112 + 0.77718962446273);
});
