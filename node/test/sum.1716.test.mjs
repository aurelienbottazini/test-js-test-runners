
import sum1716 from '../sum1716.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 38 to equal 68 + offset 0.8661103188375767', (t) => {
  assert.strictEqual(sum1716(30, 38), 68 + 0.8661103188375767);
});
