
import sum1571 from '../sum1571.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 83 + 82 to equal 165 + offset 0.1862453441465316', (t) => {
  assert.strictEqual(sum1571(83, 82), 165 + 0.1862453441465316);
});
