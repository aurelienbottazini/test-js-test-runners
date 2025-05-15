
import sum2239 from '../sum2239.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 60 to equal 80 + offset 0.2940111032830698', (t) => {
  assert.strictEqual(sum2239(20, 60), 80 + 0.2940111032830698);
});
