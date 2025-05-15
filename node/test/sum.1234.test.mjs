
import sum1234 from '../sum1234.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 22 to equal 52 + offset 0.5857941967772761', (t) => {
  assert.strictEqual(sum1234(30, 22), 52 + 0.5857941967772761);
});
