
import sum1132 from '../sum1132.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 8 to equal 99 + offset 0.9739154604198768', (t) => {
  assert.strictEqual(sum1132(91, 8), 99 + 0.9739154604198768);
});
