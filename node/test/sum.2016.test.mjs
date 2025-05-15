
import sum2016 from '../sum2016.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 12 + 59 to equal 71 + offset 0.26249203634450957', (t) => {
  assert.strictEqual(sum2016(12, 59), 71 + 0.26249203634450957);
});
