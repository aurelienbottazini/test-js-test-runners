
import sum1494 from '../sum1494.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 63 to equal 151 + offset 0.5476225375997948', (t) => {
  assert.strictEqual(sum1494(88, 63), 151 + 0.5476225375997948);
});
