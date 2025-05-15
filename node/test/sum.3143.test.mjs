
import sum3143 from '../sum3143.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 2 to equal 15 + offset 0.642269790925277', (t) => {
  assert.strictEqual(sum3143(13, 2), 15 + 0.642269790925277);
});
