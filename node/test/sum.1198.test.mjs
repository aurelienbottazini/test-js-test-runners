
import sum1198 from '../sum1198.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 83 to equal 85 + offset 0.0641493499641268', (t) => {
  assert.strictEqual(sum1198(2, 83), 85 + 0.0641493499641268);
});
