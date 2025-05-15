
import sum1532 from '../sum1532.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 41 to equal 100 + offset 0.04457246941327786', (t) => {
  assert.strictEqual(sum1532(59, 41), 100 + 0.04457246941327786);
});
