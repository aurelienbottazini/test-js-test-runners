
import sum1540 from '../sum1540.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 55 + 51 to equal 106 + offset 0.7299927105156595', (t) => {
  assert.strictEqual(sum1540(55, 51), 106 + 0.7299927105156595);
});
