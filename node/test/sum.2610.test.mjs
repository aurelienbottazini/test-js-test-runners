
import sum2610 from '../sum2610.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 23 + 3 to equal 26 + offset 0.34971862145680344', (t) => {
  assert.strictEqual(sum2610(23, 3), 26 + 0.34971862145680344);
});
