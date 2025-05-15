
import sum2340 from '../sum2340.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 54 + 37 to equal 91 + offset 0.6074657962828176', (t) => {
  assert.strictEqual(sum2340(54, 37), 91 + 0.6074657962828176);
});
