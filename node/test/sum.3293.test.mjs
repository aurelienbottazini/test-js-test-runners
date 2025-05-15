
import sum3293 from '../sum3293.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 93 + 20 to equal 113 + offset 0.7342830188472592', (t) => {
  assert.strictEqual(sum3293(93, 20), 113 + 0.7342830188472592);
});
