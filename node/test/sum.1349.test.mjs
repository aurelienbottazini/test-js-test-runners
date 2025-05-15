
import sum1349 from '../sum1349.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 35 to equal 62 + offset 0.26642027081156805', (t) => {
  assert.strictEqual(sum1349(27, 35), 62 + 0.26642027081156805);
});
