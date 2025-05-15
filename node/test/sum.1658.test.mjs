
import sum1658 from '../sum1658.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 39 to equal 94 + offset 0.7346815257434177', (t) => {
  assert.strictEqual(sum1658(55, 39), 94 + 0.7346815257434177);
});
