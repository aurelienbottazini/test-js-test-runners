
import sum2655 from '../sum2655.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 48 to equal 54 + offset 0.7624775962709373', (t) => {
  assert.strictEqual(sum2655(6, 48), 54 + 0.7624775962709373);
});
