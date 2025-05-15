
import sum1201 from '../sum1201.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 70 to equal 86 + offset 0.7664592699826357', (t) => {
  assert.strictEqual(sum1201(16, 70), 86 + 0.7664592699826357);
});
