
import sum2352 from '../sum2352.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 63 to equal 84 + offset 0.4922448302205896', (t) => {
  assert.strictEqual(sum2352(21, 63), 84 + 0.4922448302205896);
});
