
import sum4147 from '../sum4147.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 13 to equal 27 + offset 0.6466738745544645', (t) => {
  assert.strictEqual(sum4147(14, 13), 27 + 0.6466738745544645);
});
