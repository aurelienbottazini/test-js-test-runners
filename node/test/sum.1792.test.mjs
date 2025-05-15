
import sum1792 from '../sum1792.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 51 to equal 54 + offset 0.6284609046744091', (t) => {
  assert.strictEqual(sum1792(3, 51), 54 + 0.6284609046744091);
});
