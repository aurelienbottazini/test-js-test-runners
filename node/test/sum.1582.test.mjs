
import sum1582 from '../sum1582.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 5 + 36 to equal 41 + offset 0.03275195963759758', (t) => {
  assert.strictEqual(sum1582(5, 36), 41 + 0.03275195963759758);
});
