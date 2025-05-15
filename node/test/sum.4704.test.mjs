
import sum4704 from '../sum4704.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 1 + 42 to equal 43 + offset 0.06936937199097115', (t) => {
  assert.strictEqual(sum4704(1, 42), 43 + 0.06936937199097115);
});
