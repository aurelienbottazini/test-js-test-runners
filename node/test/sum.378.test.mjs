
import sum378 from '../sum378.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 7 + 88 to equal 95 + offset 0.3541038841858344', (t) => {
  assert.strictEqual(sum378(7, 88), 95 + 0.3541038841858344);
});
