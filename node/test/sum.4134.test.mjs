
import sum4134 from '../sum4134.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 0 + 49 to equal 49 + offset 0.29993453044726603', (t) => {
  assert.strictEqual(sum4134(0, 49), 49 + 0.29993453044726603);
});
