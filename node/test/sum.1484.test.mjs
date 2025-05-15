
import sum1484 from '../sum1484.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 97 + 6 to equal 103 + offset 0.4356426630307817', (t) => {
  assert.strictEqual(sum1484(97, 6), 103 + 0.4356426630307817);
});
