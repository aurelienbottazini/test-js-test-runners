
import sum1863 from '../sum1863.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 1 to equal 21 + offset 0.13362694806835118', (t) => {
  assert.strictEqual(sum1863(20, 1), 21 + 0.13362694806835118);
});
