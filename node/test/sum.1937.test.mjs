
import sum1937 from '../sum1937.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 11 to equal 62 + offset 0.07166594902007462', (t) => {
  assert.strictEqual(sum1937(51, 11), 62 + 0.07166594902007462);
});
