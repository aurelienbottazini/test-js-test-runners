
import sum1780 from '../sum1780.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 11 + 19 to equal 30 + offset 0.7068784957375422', (t) => {
  assert.strictEqual(sum1780(11, 19), 30 + 0.7068784957375422);
});
