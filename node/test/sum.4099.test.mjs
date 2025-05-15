
import sum4099 from '../sum4099.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 73 + 84 to equal 157 + offset 0.3120666950586699', (t) => {
  assert.strictEqual(sum4099(73, 84), 157 + 0.3120666950586699);
});
