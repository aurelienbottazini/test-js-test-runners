
import sum3691 from '../sum3691.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 56 to equal 142 + offset 0.9194978142512441', (t) => {
  assert.strictEqual(sum3691(86, 56), 142 + 0.9194978142512441);
});
