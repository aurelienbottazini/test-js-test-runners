
import sum1720 from '../sum1720.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 28 + 60 to equal 88 + offset 0.1443240599301563', (t) => {
  assert.strictEqual(sum1720(28, 60), 88 + 0.1443240599301563);
});
