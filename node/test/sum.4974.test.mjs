
import sum4974 from '../sum4974.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 81 to equal 84 + offset 0.7348442648915227', (t) => {
  assert.strictEqual(sum4974(3, 81), 84 + 0.7348442648915227);
});
