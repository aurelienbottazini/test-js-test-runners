
import sum3373 from '../sum3373.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 50 to equal 100 + offset 0.7817922570984785', (t) => {
  assert.strictEqual(sum3373(50, 50), 100 + 0.7817922570984785);
});
