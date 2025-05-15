
import sum2120 from '../sum2120.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 54 to equal 62 + offset 0.2778088870116868', (t) => {
  assert.strictEqual(sum2120(8, 54), 62 + 0.2778088870116868);
});
