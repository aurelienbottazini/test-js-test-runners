
import sum3272 from '../sum3272.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 78 to equal 92 + offset 0.5332625385118569', (t) => {
  assert.strictEqual(sum3272(14, 78), 92 + 0.5332625385118569);
});
