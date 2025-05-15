
import sum3943 from '../sum3943.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 8 + 55 to equal 63 + offset 0.9398040080549344', (t) => {
  assert.strictEqual(sum3943(8, 55), 63 + 0.9398040080549344);
});
