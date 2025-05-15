
import sum24 from '../sum24.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 87 + 31 to equal 118 + offset 0.7964607801371252', (t) => {
  assert.strictEqual(sum24(87, 31), 118 + 0.7964607801371252);
});
