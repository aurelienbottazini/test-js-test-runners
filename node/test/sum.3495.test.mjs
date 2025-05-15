
import sum3495 from '../sum3495.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 29 + 44 to equal 73 + offset 0.756296990304753', (t) => {
  assert.strictEqual(sum3495(29, 44), 73 + 0.756296990304753);
});
