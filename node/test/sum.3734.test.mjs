
import sum3734 from '../sum3734.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 19 to equal 109 + offset 0.8002692567733656', (t) => {
  assert.strictEqual(sum3734(90, 19), 109 + 0.8002692567733656);
});
