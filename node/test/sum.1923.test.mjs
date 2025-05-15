
import sum1923 from '../sum1923.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 50 to equal 58 + offset 0.19795985883387934', (t) => {
  assert.strictEqual(sum1923(8, 50), 58 + 0.19795985883387934);
});
