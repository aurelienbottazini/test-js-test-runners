
import sum1425 from '../sum1425.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 49 to equal 117 + offset 0.3084579252003916', (t) => {
  assert.strictEqual(sum1425(68, 49), 117 + 0.3084579252003916);
});
