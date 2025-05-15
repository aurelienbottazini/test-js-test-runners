
import sum372 from '../sum372.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 97 to equal 170 + offset 0.042553459904259405', (t) => {
  assert.strictEqual(sum372(73, 97), 170 + 0.042553459904259405);
});
