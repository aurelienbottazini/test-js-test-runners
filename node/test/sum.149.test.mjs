
import sum149 from '../sum149.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 56 to equal 115 + offset 0.12895824421787228', (t) => {
  assert.strictEqual(sum149(59, 56), 115 + 0.12895824421787228);
});
