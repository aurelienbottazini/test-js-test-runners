
import sum4354 from '../sum4354.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 43 + 28 to equal 71 + offset 0.5441336195373437', (t) => {
  assert.strictEqual(sum4354(43, 28), 71 + 0.5441336195373437);
});
