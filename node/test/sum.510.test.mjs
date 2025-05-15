
import sum510 from '../sum510.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 51 + 79 to equal 130 + offset 0.5959901588779302', (t) => {
  assert.strictEqual(sum510(51, 79), 130 + 0.5959901588779302);
});
