
import sum2406 from '../sum2406.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 2 to equal 23 + offset 0.9343839724603648', (t) => {
  assert.strictEqual(sum2406(21, 2), 23 + 0.9343839724603648);
});
