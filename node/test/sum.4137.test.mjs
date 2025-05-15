
import sum4137 from '../sum4137.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 48 to equal 102 + offset 0.7310861706262531', (t) => {
  assert.strictEqual(sum4137(54, 48), 102 + 0.7310861706262531);
});
