
import sum2434 from '../sum2434.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 48 to equal 99 + offset 0.7046901337777517', (t) => {
  assert.strictEqual(sum2434(51, 48), 99 + 0.7046901337777517);
});
