
import sum1574 from '../sum1574.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 61 to equal 116 + offset 0.7513226052160716', (t) => {
  assert.strictEqual(sum1574(55, 61), 116 + 0.7513226052160716);
});
