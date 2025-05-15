
import sum899 from '../sum899.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 66 + 39 to equal 105 + offset 0.14945863690405403', (t) => {
  assert.strictEqual(sum899(66, 39), 105 + 0.14945863690405403);
});
