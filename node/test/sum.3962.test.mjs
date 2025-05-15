
import sum3962 from '../sum3962.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 59 + 6 to equal 65 + offset 0.6187380668871546', (t) => {
  assert.strictEqual(sum3962(59, 6), 65 + 0.6187380668871546);
});
