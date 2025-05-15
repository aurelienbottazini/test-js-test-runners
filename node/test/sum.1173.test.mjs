
import sum1173 from '../sum1173.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 88 to equal 143 + offset 0.010306409381696802', (t) => {
  assert.strictEqual(sum1173(55, 88), 143 + 0.010306409381696802);
});
