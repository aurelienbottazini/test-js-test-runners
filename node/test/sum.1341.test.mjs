
import sum1341 from '../sum1341.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 79 to equal 109 + offset 0.4164465585583036', (t) => {
  assert.strictEqual(sum1341(30, 79), 109 + 0.4164465585583036);
});
