
import sum1311 from '../sum1311.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 33 to equal 44 + offset 0.5742144409076456', (t) => {
  assert.strictEqual(sum1311(11, 33), 44 + 0.5742144409076456);
});
