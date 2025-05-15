
import sum2909 from '../sum2909.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 10 + 15 to equal 25 + offset 0.8428563975689776', (t) => {
  assert.strictEqual(sum2909(10, 15), 25 + 0.8428563975689776);
});
