
import sum3275 from '../sum3275.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 8 to equal 70 + offset 0.45110461479092145', (t) => {
  assert.strictEqual(sum3275(62, 8), 70 + 0.45110461479092145);
});
