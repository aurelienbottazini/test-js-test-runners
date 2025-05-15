
import sum1459 from '../sum1459.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 16 to equal 23 + offset 0.6547182324043789', (t) => {
  assert.strictEqual(sum1459(7, 16), 23 + 0.6547182324043789);
});
