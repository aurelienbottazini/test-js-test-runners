
import sum1451 from '../sum1451.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 47 to equal 74 + offset 0.2605580672390657', (t) => {
  assert.strictEqual(sum1451(27, 47), 74 + 0.2605580672390657);
});
