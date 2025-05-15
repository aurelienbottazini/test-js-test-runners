
import sum2847 from '../sum2847.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 38 + 3 to equal 41 + offset 0.3514058831891045', (t) => {
  assert.strictEqual(sum2847(38, 3), 41 + 0.3514058831891045);
});
