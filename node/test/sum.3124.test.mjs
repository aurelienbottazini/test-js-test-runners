
import sum3124 from '../sum3124.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 82 to equal 170 + offset 0.2995010007771943', (t) => {
  assert.strictEqual(sum3124(88, 82), 170 + 0.2995010007771943);
});
