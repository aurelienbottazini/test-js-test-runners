
import sum3972 from '../sum3972.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 52 to equal 55 + offset 0.6664096299780455', (t) => {
  assert.strictEqual(sum3972(3, 52), 55 + 0.6664096299780455);
});
