
import sum3658 from '../sum3658.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 19 to equal 70 + offset 0.965678483727136', (t) => {
  assert.strictEqual(sum3658(51, 19), 70 + 0.965678483727136);
});
