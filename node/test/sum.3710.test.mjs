
import sum3710 from '../sum3710.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 49 + 3 to equal 52 + offset 0.1975573627739553', (t) => {
  assert.strictEqual(sum3710(49, 3), 52 + 0.1975573627739553);
});
