
import sum2201 from '../sum2201.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 30 + 53 to equal 83 + offset 0.667075090056653', (t) => {
  assert.strictEqual(sum2201(30, 53), 83 + 0.667075090056653);
});
