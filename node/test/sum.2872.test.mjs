
import sum2872 from '../sum2872.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 56 + 56 to equal 112 + offset 0.6775099876798811', (t) => {
  assert.strictEqual(sum2872(56, 56), 112 + 0.6775099876798811);
});
