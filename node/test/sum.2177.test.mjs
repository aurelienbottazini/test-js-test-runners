
import sum2177 from '../sum2177.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 61 to equal 117 + offset 0.8081239178191364', (t) => {
  assert.strictEqual(sum2177(56, 61), 117 + 0.8081239178191364);
});
