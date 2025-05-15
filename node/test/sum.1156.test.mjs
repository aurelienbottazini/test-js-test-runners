
import sum1156 from '../sum1156.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 19 to equal 33 + offset 0.7514719744737359', (t) => {
  assert.strictEqual(sum1156(14, 19), 33 + 0.7514719744737359);
});
