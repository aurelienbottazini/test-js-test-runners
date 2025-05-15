
import sum3266 from '../sum3266.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 52 + 18 to equal 70 + offset 0.43325636007350843', (t) => {
  assert.strictEqual(sum3266(52, 18), 70 + 0.43325636007350843);
});
