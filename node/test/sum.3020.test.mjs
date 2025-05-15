
import sum3020 from '../sum3020.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 75 to equal 83 + offset 0.9171604207448536', (t) => {
  assert.strictEqual(sum3020(8, 75), 83 + 0.9171604207448536);
});
