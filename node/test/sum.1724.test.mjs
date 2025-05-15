
import sum1724 from '../sum1724.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 36 + 12 to equal 48 + offset 0.349131124626299', (t) => {
  assert.strictEqual(sum1724(36, 12), 48 + 0.349131124626299);
});
