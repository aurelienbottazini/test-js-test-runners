
import sum1510 from '../sum1510.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 16 to equal 30 + offset 0.9948953324727227', (t) => {
  assert.strictEqual(sum1510(14, 16), 30 + 0.9948953324727227);
});
