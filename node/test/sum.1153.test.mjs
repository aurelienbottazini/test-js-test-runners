
import sum1153 from '../sum1153.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 1 to equal 96 + offset 0.22285542636129263', (t) => {
  assert.strictEqual(sum1153(95, 1), 96 + 0.22285542636129263);
});
