
import sum2510 from '../sum2510.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 65 to equal 135 + offset 0.2662167955968813', (t) => {
  assert.strictEqual(sum2510(70, 65), 135 + 0.2662167955968813);
});
