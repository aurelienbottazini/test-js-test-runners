
import sum1709 from '../sum1709.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 17 to equal 79 + offset 0.9288850281473395', (t) => {
  assert.strictEqual(sum1709(62, 17), 79 + 0.9288850281473395);
});
