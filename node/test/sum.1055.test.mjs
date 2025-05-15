
import sum1055 from '../sum1055.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 21 + 6 to equal 27 + offset 0.5168289705171537', (t) => {
  assert.strictEqual(sum1055(21, 6), 27 + 0.5168289705171537);
});
