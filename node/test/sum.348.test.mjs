
import sum348 from '../sum348.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 34 to equal 54 + offset 0.5850051575474113', (t) => {
  assert.strictEqual(sum348(20, 34), 54 + 0.5850051575474113);
});
