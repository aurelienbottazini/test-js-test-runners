
import sum1140 from '../sum1140.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 28 to equal 64 + offset 0.7997224145052094', (t) => {
  assert.strictEqual(sum1140(36, 28), 64 + 0.7997224145052094);
});
