
import sum1255 from '../sum1255.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 56 to equal 62 + offset 0.9983662955247806', (t) => {
  assert.strictEqual(sum1255(6, 56), 62 + 0.9983662955247806);
});
