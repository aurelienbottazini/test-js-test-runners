
import sum2665 from '../sum2665.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 46 to equal 56 + offset 0.8778695481991229', (t) => {
  assert.strictEqual(sum2665(10, 46), 56 + 0.8778695481991229);
});
