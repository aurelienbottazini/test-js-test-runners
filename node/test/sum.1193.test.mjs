
import sum1193 from '../sum1193.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 37 + 52 to equal 89 + offset 0.37356847880139454', (t) => {
  assert.strictEqual(sum1193(37, 52), 89 + 0.37356847880139454);
});
