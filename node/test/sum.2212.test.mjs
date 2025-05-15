
import sum2212 from '../sum2212.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 69 + 81 to equal 150 + offset 0.9576304662860639', (t) => {
  assert.strictEqual(sum2212(69, 81), 150 + 0.9576304662860639);
});
