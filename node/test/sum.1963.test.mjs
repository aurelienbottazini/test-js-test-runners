
import sum1963 from '../sum1963.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 68 + 20 to equal 88 + offset 0.05547888082834884', (t) => {
  assert.strictEqual(sum1963(68, 20), 88 + 0.05547888082834884);
});
